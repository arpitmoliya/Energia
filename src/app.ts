import express from "express";
import db from "./database/db";
import logger from "./utils/logger";
import morganInstance from "./utils/morgan";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morganInstance)
const PORT = process.env.PORT;
db.once("open", () => {
  app.listen(PORT, () => {
    logger.info(`Server running on Port no. ${PORT}`);
  });
});

import express from "express";
import dotenv from "dotenv";
import db from "./database/db";

dotenv.config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT;

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`Server running on Port no. ${PORT}`);
  });
});

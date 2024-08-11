import mongoose from "mongoose";
import logger from "../utils/logger";

mongoose.connect(process.env.MONGODB_URI || "").then(() => {
  logger.info("Database connected successfully!");
});

const db = mongoose.connection;

export default db;

import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const DB: string | undefined =
  process.env.MONGODB_URI?.replace(
    "<password>",
    process.env.MONGODB_PASSWORD || ""
  ) || process.env.MONGODB_URI;

mongoose.connect(DB || "").then(() => {
  console.log("Database connected successfully!");
});

const db  = mongoose.connection

export default db
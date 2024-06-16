import mongoose from "mongoose";

mongoose.connect(process.env.MONGODB_URI || "").then(() => {
  console.log("Database connected successfully!");
});

const db = mongoose.connection;

export default db;

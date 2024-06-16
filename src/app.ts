import express from "express";
import db from "./database/db";
// import { updateExercise } from "./scripts/updateExerciseDatabase";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT;
// updateExercise();
db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`Server running on Port no. ${PORT}`);
  });
});

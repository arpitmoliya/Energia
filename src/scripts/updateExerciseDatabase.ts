import axios from "axios";
import mongoose from "mongoose";
import Exercise, { IExercise } from "../models/Exercise";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || "");
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error", error);
    process.exit(1);
  }
};

export const fetchExercise = async () => {
  try {
    const response = await axios.get(process.env.EXERCISE_DB_API_URL || "", {
      headers: {
        "x-rapidapi-key": "ef5ccd128bmshf4e1c4669cb9da9p143462jsn83074d878f23",
        "x-rapidapi-host": "exercisedb.p.rapidapi.com",
      },
      params: { limit: 1324 },
    });

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const updateExercise = async () => {
  await connectDB();

  try {
    const exercises = await fetchExercise();
    for (const exercise of exercises) {
      const exerciseData = {
        name: exercise.name,
        bodyPart: exercise.bodyPart,
        equipment: exercise.equipment,
        gifUrl: exercise.gifUrl,
        target: exercise.target,
        secondaryMuscles: exercise.secondaryMuscles,
        instructions: exercise.instructions,
      };

      await Exercise.create(exerciseData);
    }
    console.log("Exercises updated successfully");
  } catch (error) {
    console.error("Error updating exercises", error);
  } finally {
    mongoose.connection.close();
  }
};

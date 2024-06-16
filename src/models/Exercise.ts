import { Document, Schema, model } from "mongoose";

export interface IExercise extends Document {
    id: String
  name: string;
  bodyPart: string;
  equipment: string;
  gifUrl: string;
  target: string;
  secondaryMuscles: string[];
  instructions: string[];
}

const exerciseSchema = new Schema<IExercise>(
  {
    name: {
      type: String,
      required: true,
    },
    bodyPart: {
      type: String,
      required: true,
    },
    equipment: {
      type: String,
      required: true,
    },
    gifUrl: {
      type: String,
      required: true,
    },
    target: {
      type: String,
      required: true,
    },
    secondaryMuscles: {
      type: [String],
      required: true,
    },
    instructions: {
      type: [String],
      required: true,
    },
  },
  { timestamps: true }
);

const Exercise = model<IExercise>("Exercise", exerciseSchema);

export default Exercise;

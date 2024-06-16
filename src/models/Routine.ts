import { Document, Schema, model } from "mongoose";

export interface IRoutine extends Document {
  userId: String;
  name: String;
  exercises: string[];
}

const routineSchema = new Schema<IRoutine>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    exercises: [
      {
        type: Schema.Types.ObjectId,
        ref: "Exercise",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Routine = model<IRoutine>("Routine", routineSchema);

export default Routine;

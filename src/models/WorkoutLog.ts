import { Document, Schema, model } from "mongoose";

export interface IExerciseLog {
  exerciseId: String;
  sets: number;
  reps: number;
  weight?: number;
}

export interface IWorkoutLog extends Document {
  userId: String;
  routineId: String;
  exercises: IExerciseLog[];
  date: Date;
  notes?: String;
}

const exerciseLogSchema = new Schema<IExerciseLog>({
  exerciseId: {
    type: Schema.Types.ObjectId,
    ref: "Exercise",
    required: true,
  },
  sets: {
    type: Number,
    required: true,
  },
  reps: {
    type: Number,
    required: true,
  },
  weight: {
    type: Number,
  },
});

const workoutLogSchema = new Schema<IWorkoutLog>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    routineId: {
      type: Schema.Types.ObjectId,
      ref: "Routine",
      required: true,
    },
    exercises: {
      type: [exerciseLogSchema],
      required: true,
    },
    date: {
      type: Date,
      default: Date.now(),
    },
    notes: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const WorkoutLog = model<IWorkoutLog>("WorkoutLog", workoutLogSchema);

export default WorkoutLog;

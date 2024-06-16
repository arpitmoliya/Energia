import { Document, Schema, model } from "mongoose";

export interface IUser extends Document {
  userName: String;
  email: String;
  password: String;
}

const userSChema: Schema = new Schema<IUser>(
  {
    userName: {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = model<IUser>("User", userSChema);

export default User;

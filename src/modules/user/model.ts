import * as mongoose from "mongoose";

export interface IUser extends mongoose.Document {
  _id: string;
  picture: string;
  birthDate: string;
  name: string;
  email: string;
  password: string;
}

const Schema = new mongoose.Schema(
  {
    picture: {
      type: String,
      required: false,
    },
    birthDate: {
      type: String,
      required: false,
    },
    name: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: true,
      index: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    collection: "user",
  }
);

export default mongoose.model<IUser>("User", Schema);

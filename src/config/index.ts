import dotenv from "dotenv";

dotenv.config();

export const MONGO_TEST = "mongodb://localhost:27017/test";
export const PORT = process.env.PORT || 3000;
export const ENV = process.env.ENV || "dev";
export const MONGO = process.env.MONGO || "mongodb://localhost/template-rest";
export const SECRET = process.env.SECRET || "topsecret";

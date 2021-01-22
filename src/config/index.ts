import dotenv from "dotenv";

dotenv.config();

export const MONGO_TEST = "mongodb://localhost/test-mongo";
export const PORT = process.env.PORT || 3000;
export const ENV = process.env.ENV || "dev";
export const MONGO = process.env.MONGO || "mongodb://localhost/template-rest";
export const SECRET = process.env.SECRET || "topsecret";

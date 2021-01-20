import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { User } from "./modules";

const app = express();

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // support json encoded bodies

// All routers
app.use(User.router);

// Cors Configuration
app.use(cors());

export default app;

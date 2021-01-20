import { Router } from "express";
import { authorizateUser, validateBody } from "~/middlewares";
import controller from "./controller";
import { loginSchema, registerSchema } from "./validators";

const router = Router();

router.get("/me", authorizateUser, controller.me);

router.post("/login", validateBody(loginSchema), controller.login);

router.post("/register", validateBody(registerSchema), controller.register);

export default router;

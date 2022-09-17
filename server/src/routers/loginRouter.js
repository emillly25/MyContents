import { Router } from "express";
import userController from "../controllers/userController";
const loginRouter = Router();
loginRouter.post("/", userController.login);

export { loginRouter };

import { Router } from "express";
import userController from "../controllers/userController";
import { registerRequired } from "../middlewares/registerRequired";
const registerRouter = Router();
registerRouter.post("/checkEmail", registerRequired, userController.checkEmail);
registerRouter.post("/", userController.register);

export { registerRouter };

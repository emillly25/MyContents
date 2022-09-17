import { Router } from "express";
import { contentController } from "../controllers/contentController";
import { loginRequired } from "../middlewares/loginRequired";

const contentRouter = Router();

contentRouter.get("/", loginRequired, contentController.getAllInfo);
contentRouter.get("/:id", loginRequired, contentController.getOneInfo);
contentRouter.post("/", loginRequired, contentController.createContent);
contentRouter.delete("/:id", loginRequired, contentController.deleteContent);
contentRouter.patch("/:id", loginRequired, contentController.updateContent);

export { contentRouter };

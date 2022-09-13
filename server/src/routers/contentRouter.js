import { Router } from "express";
import { contentController } from "../controllers/contentController";

const contentRouter = Router();

contentRouter.get("/", contentController.getAllInfo);
contentRouter.get("/:id", contentController.getOneInfo);
contentRouter.post("/", contentController.createContent);
contentRouter.delete("/:id", contentController.deleteContent);
contentRouter.patch("/:id", contentController.updateContent);

export { contentRouter };

import { Router } from "express";
import { contentController } from "../controllers/contentController";

const contentRouter = Router();

contentRouter.get("/get", contentController.getAllInfo);
contentRouter.post("/create", contentController.createContent);

export { contentRouter };

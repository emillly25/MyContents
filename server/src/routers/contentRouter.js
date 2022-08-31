import { Router } from "express";
import { contentController } from "../controllers/contentController";

const contentRouter = Router();

contentRouter.get("/", (req, res) => {
  res.send("안녕");
});

export { contentRouter };

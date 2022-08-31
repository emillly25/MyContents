import { contentModel } from "../db/index";

class contentController {
  async getAllInfo(req, res) {
    try {
      const body = req.body;
      const newContent = await contentModel.findAllContent();
      res.status(200).json(body);
    } catch (error) {
      console.error(error);
    }
  }
}

export { contentController };

import { contentModel } from "../db/index";

const contentController = {
  async getAllInfo(req, res) {
    try {
      const result = await contentModel.findAll();
      console.log("data", result);
      res.status(200).json(result);
    } catch (error) {
      console.error(error);
    }
  },
  async createContent(req, res) {
    try {
      const data = req.body;
      await contentModel.create(data);
      res.status(200).json(data);
    } catch (error) {
      console.error(error);
    }
  },
};

export { contentController };

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
      const result = await contentModel.create(data);
      res.status(200).json(result);
    } catch (error) {
      console.error(error);
    }
  },
  async deleteContent(req, res) {
    try {
      const id = req.params.id;
      const result = await contentModel.deleteOne(id);
      res.status(200).json(result);
    } catch (error) {
      console.error(error);
    }
  },
  async updateContent(req, res) {
    try {
      const id = req.params.id;
      const content = req.body;
      const result = await contentModel.updateOne(id, content);
      res.status(200).json(result);
    } catch (error) {
      console.error(error);
    }
  },
};

export { contentController };

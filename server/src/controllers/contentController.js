import { contentModel } from "../db/index";

const contentController = {
  async getAllInfo(req, res) {
    try {
      const userId = req.currentUserId;
      const result = await contentModel.findAllById(userId);
      res.status(200).json(result);
    } catch (error) {
      console.error(error);
    }
  },
  async getOneInfo(req, res) {
    try {
      const contentId = req.params.id;
      const result = await contentModel.findOne(contentId);
      res.status(200).json(result);
    } catch (error) {
      console.error(error);
    }
  },
  async createContent(req, res) {
    try {
      const data = req.body;
      const userId = req.currentUserId;
      const result = await contentModel.create({ ...data, userId });
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
      const contentId = req.params.id;
      const content = req.body;
      const result = await contentModel.updateOne(contentId, content);
      res.status(200).json(result);
    } catch (error) {
      console.error(error);
    }
  },
};

export { contentController };

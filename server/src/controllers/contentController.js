import { contentModel } from "../db/index";

const contentController = {
  // async getAllInfo(req, res) {
  //   try {
  //     const data = req.body
  //     const newData = await contentModel.findAllContent();
  //     res.status(200).json(data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // },
  async createContent(req, res) {
    try {
      const data = req.body;
      console.log("data", data);
      await contentModel.create(data);
      res.status(200).json(data);
    } catch (error) {
      console.error(error);
    }
  },
};

export { contentController };

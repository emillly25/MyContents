import { model } from "mongoose";
import { ContentSchema } from "../schemas/contentSchema";

const Content = model("contents", ContentSchema);

class ContentModel {
  async findAllById(userId) {
    return await Content.find({ userId });
  }
  async findOne(contentId) {
    return await Content.findOne({ _id: contentId });
  }

  async create(data) {
    return await Content.create(data);
  }
  async deleteOne(contentId) {
    return await Content.deleteOne({ _id: contentId });
  }
  async updateOne(contentId, content) {
    return await Content.updateOne({ _id: contentId }, { ...content });
  }
}

const contentModel = new ContentModel();
export { contentModel };

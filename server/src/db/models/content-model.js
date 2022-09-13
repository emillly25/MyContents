import { model } from "mongoose";
import { ContentSchema } from "../schemas/contentSchema";

const Content = model("contents", ContentSchema);

class ContentModel {
  async findAll() {
    return await Content.find();
  }
  async findOne(id) {
    return await Content.findOne({ _id: id });
  }

  async create(data) {
    return await Content.create(data);
  }
  async deleteOne(id) {
    return await Content.deleteOne({ _id: id });
  }
  async updateOne(id, content) {
    return await Content.updateOne({ _id: id }, { ...content });
  }
}

const contentModel = new ContentModel();
export { contentModel };

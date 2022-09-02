import { model } from "mongoose";
import { ContentSchema } from "../schemas/contentSchema";

const Content = model("contents", ContentSchema);

class ContentModel {
  async findAll() {
    return await Content.find();
  }

  async create(data) {
    return await Content.create(data);
  }
  async deleteOne(id) {
    return await Content.deleteOne({ _id: id });
  }
}

const contentModel = new ContentModel();
export { contentModel };

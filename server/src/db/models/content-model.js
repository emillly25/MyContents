import { model } from "mongoose";
import { ContentSchema } from "../schemas/contentSchema";

const Content = model("contents", ContentSchema);

class ContentModel {
  async findAllContent() {
    return await Content.find({});
  }
}

const contentModel = new ContentModel();
export { contentModel };

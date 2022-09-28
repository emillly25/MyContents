import * as api from "../api";

export async function getAllList() {
  console.log("get요청됨");
  return await api.get("/api/content");
}

export async function findOne(contentId) {
  return await api.get(`/api/content/${contentId}`);
}

export async function postOne(newContent) {
  return await api.post("/api/content", newContent);
}

export async function updateOne(infoObj) {
  return await api.patch(`/api/content/${infoObj.id}`, infoObj.updateContent);
}

export async function deleteOne(contentId) {
  return await api.delete(`/api/content/${contentId}`);
}

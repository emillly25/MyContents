import * as api from "../api";

export function getAllList() {
  return api.get("/api/content");
}

export function findOne(id) {
  return api.get(`/${id}`);
}

export function postOne(newContent) {
  return api.post("/api/content", newContent);
}

export function updateOne(infoObj) {
  return api.patch(`/api/content/${infoObj.id}`, infoObj.updateContent);
}

export function deleteOne(id) {
  return api.delete(`/api/content/${id}`);
}

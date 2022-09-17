import * as api from "../api";

export async function getAllList() {
  const req = await api.get("/api/content");
  console.log("req", req);
  return req;
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

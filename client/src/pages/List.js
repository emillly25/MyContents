import { useQuery } from "@tanstack/react-query";
import * as api from "../api";

export default function List() {
  const { isLoading, isError, data, error } = useQuery(["todos"], fetchList);
  function fetchList() {
    return api.get("/api/content");
  }

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }
  console.log("data", data);
  return (
    <div>
      <h1>제목 데이터</h1>
      <ul>
        <li>{data.data.map((el) => el.title)}</li>;
      </ul>
    </div>
  );
}

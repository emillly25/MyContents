import CreateList from "./pages/CreateList";
import UpdateList from "./pages/UpdateList";
import MainList from "./pages/MainList";
import Detail from "./pages/Detail";
import NotFonud from "./pages/NotFound";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const dataId = useRef(0);

  //초기 데이터 랜더링
  useEffect(() => {
    getList();
  }, []);
  const getList = async () => {
    setLoading(true);
    try {
      const res = await axios.get("http://localhost:3004/contents");
      setData(res.data);
      setLoading(false);
    } catch (err) {
      throw new Error("데이터를 불러올 수 없습니다.");
    }
  };

  const onCreate = (data) => {
    setData((cur) => {
      const newData = { ...data, id: dataId.current };
      const newArr = [...cur, newData];
      dataId.current += 1;
      return newArr;
    });
  };

  const onDelete = (id) => {
    const filteredArr = data.filter((el) => el.id !== id);
    setData(filteredArr);
  };

  const onUpdate = (obj) => {
    const updatedArr = data.map((el) => {
      return el.id === obj.id ? obj : el;
    });
    setData(updatedArr);
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<MainList data={data} loading={loading} />}
          />
          <Route
            path="/detail/:title"
            element={<Detail data={data} onDelete={onDelete} />}
          />
          <Route path="/create" element={<CreateList onCreate={onCreate} />} />
          <Route
            path="/update/:title"
            element={<UpdateList onUpdate={onUpdate} data={data} />}
          />
          <Route path="*" element={<NotFonud />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

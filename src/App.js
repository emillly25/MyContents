import CreateList from "./pages/CreateList";
import MainList from "./pages/MainList";
import Detail from "./pages/Detail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HelmetComponent from "./components/HelmetComponent";
import { useState, useRef } from "react";
import { DesktopDatePicker } from "@mui/x-date-pickers";

function App() {
  const [data, setData] = useState([]);
  const dataId = useRef(0);

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
    console.log(`삭제되었습니다 ${id}번째`);
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainList data={data} />} />
          <Route
            path="/detail/:title"
            element={<Detail data={data} onDelete={onDelete} />}
          />
          <Route path="/create" element={<CreateList onCreate={onCreate} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

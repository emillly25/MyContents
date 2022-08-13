import CreateList from "./pages/CreateList";
import UpdateList from "./pages/UpdateList";
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
          <Route path="/" element={<MainList data={data} />} />
          <Route
            path="/detail/:title"
            element={<Detail data={data} onDelete={onDelete} />}
          />
          <Route path="/create" element={<CreateList onCreate={onCreate} />} />
          <Route
            path="/update/:title"
            element={<UpdateList onUpdate={onUpdate} data={data} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

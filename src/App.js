import CreateList from "./pages/CreateList";
import MainList from "./pages/MainList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HelmetComponent from "./components/HelmetComponent";
import { useState } from "react";

function App() {
  const [data, setData] = useState([]);

  const onCreate = (data) => {
    setData((cur) => {
      const newData = [...cur, data];
      return newData;
    });
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainList data={data} />} />
          <Route path="/create" element={<CreateList onCreate={onCreate} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

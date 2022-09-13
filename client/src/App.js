import CreateList from "./pages/CreateList";
import UpdateList from "./pages/UpdateList";
import MainList from "./pages/MainList";
import Detail from "./pages/Detail";
import NotFonud from "./pages/NotFound";
import Login from "./pages/Login";
import List from "./pages/List";
import axios from "axios";
import * as api from "./api";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const onDelete = (id) => {
    const filteredArr = data.filter((el) => el._id !== id);
    setData(filteredArr);
  };

  const onUpdate = (obj) => {
    const updatedArr = data.map((el) => {
      return el._id === obj._id ? obj : el;
    });
    console.log("updateArr", updatedArr);
    setData(updatedArr);
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainList />} />
          <Route path="/list" element={<List />} />
          <Route path="/login" element={<Login />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/create" element={<CreateList />} />
          <Route
            path="/update/:id"
            element={
              <UpdateList onUpdate={onUpdate} data={data} loading={loading} />
            }
          />
          <Route path="*" element={<NotFonud />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

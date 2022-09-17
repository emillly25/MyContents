//Library
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Components
import CreateList from "./pages/CreateList";
import UpdateList from "./pages/UpdateList";
import MainList from "./pages/MainList";
import Detail from "./pages/Detail";
import NotFonud from "./pages/NotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/create" element={<CreateList />} />
          <Route path="/update/:id" element={<UpdateList />} />
          <Route path="*" element={<NotFonud />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";

export const BurguerRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exect path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { Menu } from "./pages/Menu";
import { Kitchen } from "./pages/Kitchen";
import { OrdersDelivery } from "./pages/OrdersDelivery";

export const BurguerRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exect path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/kitchen" element={<Kitchen />} />
        <Route path="/orders-delivery" element={<OrdersDelivery />} />
      </Routes>
    </BrowserRouter>
  );
};

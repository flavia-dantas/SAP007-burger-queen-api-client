import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { Menu } from "./pages/Menu";
import { Kitchen } from "./pages/Kitchen";
import { OrdersHistory } from "./pages/OrdersHistory";
import { OrdersDelivery } from "./pages/OrdersDelivery";
import { getToken } from "./services/localStorage";

export const BurguerRoutes = () => {
  const PrivateRoute = ({ children, redirectTo }) => {
    const isAuth = getToken() !== null;
    return isAuth ? children : <Navigate to={redirectTo} />;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route exect path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/menu"
          element={
            <PrivateRoute redirectTo="/">
              <Menu />
            </PrivateRoute>
          }
        />
        <Route
          path="/kitchen"
          element={
            <PrivateRoute redirectTo="/">
              <Kitchen />
            </PrivateRoute>
          }
        />
        <Route
          path="/orders-delivery"
          element={
            <PrivateRoute redirectTo="/">
              <OrdersDelivery />
            </PrivateRoute>
          }
        />
        <Route
          path="/orders-history"
          element={
            <PrivateRoute redirectTo="/">
              <OrdersHistory />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

import "./style.css";
import { useEffect, useState } from "react";
import { OrdersCard } from "../../components/OrdersCard";
import { ProductsOrder } from "../../components/ProductsOrder";
import { getOrders } from "../../services/products";
import { Header } from "../../components/Header";

export const Kitchen = () => {
  const [orders, setOrders] = useState([]);

  const showOrders = async () => {
    return getOrders()
    .then((response) => response.json())
    .then((data) => setOrders(data));
  };
  console.log(orders);

  useEffect(() => {
    showOrders();
  }, []);

  return (
    <>
      <Header titlePage="Cozinha" />
      <ul className="orders-container">
        {orders.map((item) => {
          return (
            <div key={item.id}>
              <OrdersCard
              id={item.id}
              clientName={item.client_name}
              table={item.table}
              status={item.status}
              createdAt={item.createdAt}
              updatedAt={item.updatedAt}
              products={item.Products.map((element) => {
                return (
                  <div key={element.id}>
                    <ProductsOrder
                    name={element.name}
                    flavor={element.flavor}
                    complement={element.complement}
                    qtd={element.qtd}
                    />
                  </div>
                );
              })}
              />
            </div>
          );
        })}
      </ul>
    </>
  );
};

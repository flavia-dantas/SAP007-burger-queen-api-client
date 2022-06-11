import "./style.css";
import { useEffect, useState } from "react";
import { OrdersCard } from "../../components/OrdersCard";
import { ProductsOrder } from "../../components/ProductsOrder";
import { getOrders, updateOrders } from "../../services/products";
import { Header } from "../../components/Header";
import { sortData } from "../../helper";
import { Button } from "../../components/Button";
import { calculationPreparationTime, formatTime } from "../../helper/preparationTime";

export const Kitchen = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getOrders()
    .then((response) => response.json())
    .then((data) => setOrders(sortData(data)));
  }, []);

  useEffect(() => {
  }, [orders]);

  const orderStatus = (item, e) => {
    updateOrders(item.id, e.target.value)
    .then((response) => {
      if (response.status === 200) {
        const copyOrders = orders.map((copyOrder) => {
          if (copyOrder.id === item.id ) {
            copyOrder.status = e.target.value;
            copyOrder.updatedAt = new Date();
            copyOrder.processedAt = new Date();
          }
          return copyOrder;
        });
        setOrders(copyOrders);
      }
    });
  };

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
              createdAt={formatTime(item.createdAt)}
              updatedAt={formatTime(item.updatedAt)}
              processedAt={formatTime(item.processedAt)}
              preparationTime={calculationPreparationTime(item.processedAt,item.createdAt)}
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
              >
                {item.status === "pending" ?
                <Button onClick={(e) => orderStatus(item, e)} value="preparing">
                  Preparar</Button> : item.status === "preparing" &&
                 <Button onClick={(e) => orderStatus(item, e)} value="done">Pronto</Button>}
              </OrdersCard>
            </div>
          );
        })}
      </ul>
    </>
  );
};

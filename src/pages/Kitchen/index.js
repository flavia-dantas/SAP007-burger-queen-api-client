import "./style.css";
import { useEffect, useState } from "react";
import { OrdersCard } from "../../components/OrdersCard";
import { ProductsOrder } from "../../components/ProductsOrder";
import { getOrders, updateOrders } from "../../services/products";
import { Header } from "../../components/Header";
import { sortData } from "../../data";
import { Button } from "../../components/Button";

export const Kitchen = () => {
  const [orders, setOrders] = useState([]);
  const [update, setUpdate] = useState("pendente");

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
    }
          return copyOrder;
        });
        setOrders(copyOrders);
    }
    });
  };

  };

  return (
    <>
      <Header titlePage="Cozinha" />
      <ul className="orders-container">
        {orders.map((item) => {
          return (
            <div key={item.id}>
              <Button value={update}>{update}</Button>
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
              >
                {item.status === "pending" ?
                <Button onClick={(e) => orderStatus(item, e)} value="preparing">
                  Em preparo</Button> : item.status === "preparing" &&
                 <Button onClick={(e) => orderStatus(item, e)} value="done">Pronto</Button>}
              </OrdersCard>
            </div>
          );
        })}
      </ul>
    </>
  );
};

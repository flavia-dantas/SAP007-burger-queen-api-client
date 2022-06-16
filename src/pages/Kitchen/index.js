import "./style.css";
import { useEffect, useState } from "react";
import { OrdersCard } from "../../components/OrdersCard";
import { ProductsOrder } from "../../components/ProductsOrder";
import { getOrders, updateOrders } from "../../services/products";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import {
  calculationPreparationTime,
  filterData,
  formatTime,
  sortData,
  statusVerification
} from "../../helper";

export const Kitchen = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getOrders()
    .then((response) => response.json())
    .then((data) => {
      const sortDataKitchen = sortData(data);
      const filterStatus = filterData(sortDataKitchen,"pending","preparing");
      setOrders(filterStatus);
    });
  }, []);

  const orderStatus = (item, e) => {
    updateOrders(item.id, e.target.value)
    .then((response) => {
      let copyOrders = orders;
      if (response.status === 200) {
        copyOrders = orders.map((copyOrder) => {
          if (copyOrder.id === item.id ) {
            copyOrder.status = e.target.value;
            copyOrder.updatedAt = new Date();
            copyOrder.processedAt = new Date();
          }
          return copyOrder;
        });
        const filterOnChangeStatus = filterData(copyOrders,"pending","preparing");
        setOrders(filterOnChangeStatus);
      }
    });
  };

  return (
    <>
      <Header titlePage="Cozinha" />
      <section className="kitchen-container">
        <ul className="orders-container">
          {orders.map((item) => {
            return (
              <div key={item.id}>
                <OrdersCard
                id={item.id}
                clientName={item.client_name}
                table={item.table}
                status={statusVerification(item)}
                createdAt={formatTime(item.createdAt)}
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
                    Preparar </Button> : item.status === "preparing" &&
                  <Button onClick={(e) => orderStatus(item, e)} value="ready">Pronto</Button>}
                </OrdersCard>
              </div>
            );
          })}
        </ul>
      </section>
    </>
  );
};

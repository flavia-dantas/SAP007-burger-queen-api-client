import "./style.css";
import { useEffect, useState } from "react";
import { OrdersCard } from "../../components/OrdersCard";
import { ProductsOrder } from "../../components/ProductsOrder";
import { getOrders, updateOrders } from "../../services/products";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import {
  calculationPreparationTime,
  filterStatus,
  formatTime,
  sortData,
  statusVerification
} from "../../helper";

export const OrdersDelivery = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getOrders()
    .then((response) => response.json())
    .then((data) => {
      const sortOrders = sortData(data);
      const filterData = filterStatus(sortOrders,"ready");
      setOrders(filterData);
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
        const filterOnChangeStatus = filterStatus(copyOrders,"ready");
        setOrders(filterOnChangeStatus);
      }
    });
  };

  return (
    <>
      <Header titlePage="Pedidos para Entrega" />
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
                status2={item.status}
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
                  <Button onClick={(e) => orderStatus(item, e)} value="delivered">Entregar</Button>
                </OrdersCard>
              </div>
            );
          })}
        </ul>
      </section>
    </>
  );
};

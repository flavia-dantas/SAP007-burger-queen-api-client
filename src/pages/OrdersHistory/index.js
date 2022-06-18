import "./style.css";
import { useEffect, useState } from "react";
import { OrdersCard } from "../../components/OrdersCard";
import { ProductsOrder } from "../../components/ProductsOrder";
import { getOrders } from "../../services/products";
import { Header } from "../../components/Header";
import {
  calculationPreparationTime,
  filterStatus,
  formatTime,
  sortData,
  statusVerification
} from "../../helper";

export const OrdersHistory = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getOrders()
    .then((response) => response.json())
    .then((data) => {
      const sortOrders = sortData(data);
      const filterData = filterStatus(sortOrders,"delivered");
      setOrders(filterData);
    });
  }, []);

  return (
    <>
      <Header titlePage="Histórico" />
      <section className="orders-history-container">
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
                />
              </div>
            );
          })}
        </ul>
      </section>
    </>
  );
};

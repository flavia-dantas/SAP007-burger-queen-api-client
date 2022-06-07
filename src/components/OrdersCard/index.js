// import { Button } from "../Button";
import "./style.css";

export const OrdersCard = ({id, clientName, table, status, createdAt, updatedAt, products, children}) => {
  return (
    <li className="orders-card">
      <p>Nº Pedido: {id}</p>
      <p>Cliente: {clientName}</p>
      <p>Mesa: {table}</p>
      <p>Status: {status}</p>
      <p>Criado: {createdAt}</p>
      <p>Última Atualização: {updatedAt}</p>
      <ul>Produtos: {products}</ul>
      <div>{children}</div>
    </li>
  );
};

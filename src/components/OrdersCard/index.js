import "./style.css";

export const OrdersCard = ({id, clientName, table, status, createdAt, updatedAt, products, children, preparationTime, processedAt}) => {
  return (
    <li className="orders-card">
      {status === "pronto" || status === "entregue" ?
      <>
        <p>Processado: {processedAt}</p>
        <p>Tempo de Preparo:{preparationTime}</p>
      </>
      }
      <ul>Produtos: {products}</ul>
      {children}
    </li>
  );
};

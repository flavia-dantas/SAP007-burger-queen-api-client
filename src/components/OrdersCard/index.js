import "./style.css";

export const OrdersCard = ({id, clientName, table, status, createdAt, updatedAt, products, children, preparationTime, processedAt}) => {
  return (
    <li className="orders-card">
      <p>Nº Pedido: {id}</p>
      <p>Cliente: {clientName}</p>
      <p>Mesa: {table}</p>
      <p>Status: {status}</p>
      <p>Criado: {createdAt}</p>
      <p>Última Atualização: {updatedAt}</p>
      {status !== "done" ?  "" :
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

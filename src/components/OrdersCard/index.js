import "./style.css";

export const OrdersCard = ({id, clientName, table, status, createdAt, updatedAt, products, children, preparationTime, processedAt}) => {
  return (
    <li className="orders-card">
      <div className="orders-status">
        {status}
      </div>
      <p className="orders-info"><span className="orders-info-span">Nº Pedido:</span> {id}</p>
      <p className="orders-info"><span className="orders-info-span">Cliente:</span> {clientName}</p>
      <p className="orders-info"><span className="orders-info-span">Mesa:</span> {table}</p>
      <p className="orders-info"><span className="orders-info-span">Criado em:</span> {createdAt}</p>
      {status === "pronto" || status === "entregue" ?
      <>
        <p className="orders-info"><span className="orders-info-span">Preparado em:</span> {preparationTime}</p>
        <p className="orders-info"><span className="orders-info-span">Finalizado em:</span> {processedAt}</p>
      </>
      : ""
      }
      {status === "entregue" ?
      <p className="orders-info"><span className="orders-info-span">Entregue em:</span> {updatedAt}</p>
      : ""
      }
      <ul className="orders-info"><span className="orders-info-span">Produtos:</span> {products}</ul>
      {children}
    </li>
  );
};

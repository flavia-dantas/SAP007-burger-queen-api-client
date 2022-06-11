import "./style.css";
import TrashCan from "../../assets/trash_can.svg";

export const ItemCommand = ({
  qtd,
  name,
  flavor,
  complement,
  price,
  children,
  onClickDelete,
  totalPriceItem,
}) => {
  return (
    <li className="item-list">
      <div className="item-detail">
        <p>
          {qtd} x <span> {name}</span> <span>R${price},00</span>
        </p>
        <p>R${totalPriceItem},00</p>
      </div>
      <div className="item-additional">
        {flavor === null ? "" : <p> {flavor} </p>}
        {complement === null ? "" : <p> + complemento: ${complement}</p>}
      </div>
      <div className="item-detail">
        {children}
        <button className="trash-can" onClick={onClickDelete}>
          <img src={TrashCan} />
        </button>
      </div>
    </li>
  );
};

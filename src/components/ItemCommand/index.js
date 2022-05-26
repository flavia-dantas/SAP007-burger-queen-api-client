import TrashCan from "../../assets/trash_can.svg";

export const ItemCommand = ({ qtd, name, price, children, onClickDelete, totalPriceItem}) => {
  return (
    <li>
      <div>
      <p>
        {qtd} x <span> {name}</span> <span>R${price},00</span>
      </p>
      <p>R${totalPriceItem},00</p>
      </div>
      <div>
        <div>{children}</div>
        <button onClick={onClickDelete}>
          <img src={TrashCan} />
        </button>
      </div>
    </li>
  );
};

export const ProductsOrder = ({name, flavor, complement, qtd}) => {
  return (
    <li className="item-orders">
        <p className="item-name">
          {qtd} x <span> {name}</span>
        </p>
        {flavor === null ? "" : <p className="item-additional"> {flavor} </p>}
        {complement === null ? "" : <p className="item-additional">complemento: {complement}</p>}
    </li>
  );
};

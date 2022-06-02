import "./style.css";

export const MenuCard = ({
  name,
  flavor,
  complement,
  image,
  price,
  children,
}) => {
  return (
    <li className="item">
      <img className="item-image" src={image} alt={name} />
      <h3 className="item-name main-info">{name}</h3>
      <h3 className="item-flavor main-info">{flavor}</h3>
      <h3 className="item-complement main-info">
        {complement === null ? "" : `complemento: ${complement}`}
      </h3>
      <h4 className="item-price main-info">R${price},00</h4>
      <div>{children}</div>
    </li>
  );
};

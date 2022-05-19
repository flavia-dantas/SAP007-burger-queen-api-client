
import "./style.css";

export const MenuCard = ({name, image, price, children}) => {
  return (
    <li className="item">
      <img className="item-image" src={image} alt={name}/>
      <h3 className="item-name">{name}</h3>
      <h4 className="item-price">R${price},00</h4>
      <div>{children}</div>
    </li>
  );
};

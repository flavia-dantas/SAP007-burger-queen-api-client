import "./style.css";
import Logo from "../../assets/logo.svg";
import Exit from "../../assets/exit.svg";
import ShoppingCart from "../../assets/shopping_cart.svg";

export const Header = ({ titlePage, onClickExit, onClickCart }) => {
  return (
    <header className="header">
      <picture className="logo">
        <img src={Logo} />
      </picture>
      <h1 className="header-title">{titlePage}</h1>
      <div className="buttons-container">
        <button className="button-header" onClick={onClickExit}>
          <img src={Exit} />
        </button>
        <button className="button-header" onClick={onClickCart}>
          <img src={ShoppingCart} />
        </button>
      </div>
    </header>
  );
};

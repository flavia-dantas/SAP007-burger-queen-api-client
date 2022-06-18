import "./style.css";
import Logo from "../../assets/logo.svg";
import Exit from "../../assets/exit.svg";
import Delivery from "../../assets/delivery.svg";
import History from "../../assets/history.svg";
import Home from "../../assets/home.svg";
import { getRole, getToken, removeRole, removeToken } from "../../services/localStorage";
import { useNavigate } from "react-router-dom";

export const Header = ({ titlePage }) => {

  const navigate = useNavigate();

  const handleLogout = () => {
    if(getToken){
      removeToken();
      removeRole();
      return navigate("/");
    }
  };

  const handleHome = () => {
    if(getRole() === "saloon") {
      navigate("/menu");
    } else if(getRole() === "kitchen") {
      navigate("/kitchen");
    }
  };

  const handleHistory = () => navigate("/orders-history");

  const handleDelivery = () => navigate("/orders-delivery");



  return (
    <header className="header">
      <picture className="logo">
        <img className="logo-burger" src={Logo} />
      </picture>
      <h1 className="header-title">{titlePage}</h1>
      <div className="buttons-container">
        <button className="button-header" onClick={handleLogout}>
          <img className="img-button-header" src={Exit} />
        </button>
        <div className="container-button-history-delivery">

          <button className="button-header" onClick={handleHome}>
            <img className="img-button-header" src={Home} />
          </button>
          {getRole() === "saloon" ?
          <button className="button-header" onClick={handleDelivery}>
            <img className="img-button-header" src={Delivery} />
          </button> : "" }
          <button className="button-header" onClick={handleHistory}>
            <img className="img-button-header" src={History} />
          </button>
        </div>
      </div>
    </header>
  );
};

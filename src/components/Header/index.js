import "./style.css";
import Logo from "../../assets/logo.svg";
import Exit from "../../assets/exit.svg";
import { getToken, removeToken } from "../../services/localStorage";
import { useNavigate } from "react-router-dom";

export const Header = ({ titlePage }) => {

  const navigate = useNavigate();

  const handleLogout = () => {
    if(getToken){
      removeToken();
      return navigate("/");
    }
  };

  return (
    <header className="header">
      <picture className="logo">
        <img className="logo-burger" src={Logo} />
      </picture>
      <h1 className="header-title">{titlePage}</h1>
      <div className="buttons-container">
        <button className="button-header" onClick={() => handleLogout()}>
          <img src={Exit} />
        </button>
      </div>
    </header>
  );
};

import "./style.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { InputElement } from "../../components/Input";
import { statusCode } from "../../services/error";
import { setToken } from "../../services/localStorage";
import { loginUser } from "../../services/auth";
import { LayoutForm } from "../../components/Layout";
import { MessageStatusCode } from "../../components/MessageStatusCode";
import Logo from "../../assets/logo.svg";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    loginUser(email, password)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        setErrorMessage(statusCode(response));
      })
      .then((data) => {
        console.log(data.token);
        setToken(data.token);
        navigate(data.role === "saloon" ? "/menu" : "/kitchen");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <LayoutForm>
        <img className="logo" src={Logo} alt="logo" />
          <InputElement
            type="email"
            label="E-mail"
            value={email}
            name="input"
            placeholder="user@user.com"
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputElement
            type="password"
            label="Senha"
            value={password}
            name="input"
            placeholder="******"
            onChange={(e) => setPassword(e.target.value)}
          />
          <MessageStatusCode
          disable={errorMessage ? false : true}
          message={errorMessage}
          />
          <Button text="Entrar" onClick={handleLogin} />
        </form>
        <p className="text-center">
          <span className="text-span">Não possui conta? </span>
          <Link className="text-link" to="/register">
            Cadastre-se
          </Link>
        </p>
      </LayoutForm>
    </>
  );
};

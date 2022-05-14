import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { InputElement } from "../../components/Input";
import { statusCode } from "../../services/error";
import { setToken } from "../../services/localStorage";
import { loginUser } from "../../services/auth";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    loginUser(email, password)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        statusCode();
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
      <InputElement
        type="email"
        className="input"
        label="E-mail"
        value={email}
        name="input"
        placeholder="user@user.com"
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputElement
        type="password"
        className="input"
        label="Senha"
        value={password}
        name="input"
        placeholder="******"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button className="button" text="Entrar" onClick={handleLogin} />

      <p className="text-center">
        <span className="text-span">Não possui conta? </span>
        <Link className="text-link" to="/register">
          Cadastre-se
        </Link>
      </p>
    </>
  );
};

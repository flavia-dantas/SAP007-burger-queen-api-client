import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { InputElement } from "../../components/Input";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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

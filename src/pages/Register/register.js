import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button/button";
import { InputElement } from "../../components/Input/input";

export const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  return (
    <>
      <form>
        <InputElement
          type="text"
          className="input"
          value={name}
          name="input"
          placeholder="Digite o seu nome completo"
          onChange={(e) => setName(e.target.value)}
        ></InputElement>
        <InputElement
          type="email"
          className="input"
          value={email}
          name="input"
          placeholder="user@user.com"
          onChange={(e) => setEmail(e.target.value)}
        ></InputElement>
        <InputElement
          type="password"
          className="input"
          value={password}
          name="input"
          placeholder="******"
          onChange={(e) => setPassword(e.target.value)}
        ></InputElement>
        <InputElement
          type="radio"
          className="input-radio"
          value={role}
          name="input-role"
          onChange={(e) => setRole(e.target.value)}
        ></InputElement>
        <label>Atendente</label>
        <InputElement
          type="radio"
          className="input-radio"
          value={role}
          name="input-role"
          onChange={(e) => setRole(e.target.value)}
        ></InputElement>
        <label>Cozinha</label>
        <Button className="button">Cadastrar</Button>
      </form>
      <p className="text-center">
        <span className="text-span">Já possui conta?</span>
        <Link className="text-link" to="/">
          Conecte-se
        </Link>
      </p>
    </>
  );
};

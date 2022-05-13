import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { InputElement } from "../../components/Input";
import { createUser } from "../../services/auth";
import { errorMessage } from "../../services/error";

export const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("saloon");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser(name, email, password, role)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        errorMessage(response);
      })
      .then((data) => {
        console.log(data.token);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
          value="saloon"
          name="role"
          checked={role === "saloon"}
          onChange={(e) => setRole(e.target.value)}
        ></InputElement>
        <label>Atendente</label>
        <InputElement
          type="radio"
          className="input-radio"
          value="kitchen"
          name="role"
          checked={role === "kitchen"}
          onChange={(e) => setRole(e.target.value)}
        ></InputElement>
        <label>Cozinha</label>
        <Button className="button" onClick={handleSubmit}>Cadastrar</Button>
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

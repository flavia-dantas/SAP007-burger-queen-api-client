import "./style.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { InputElement } from "../../components/Input";
import { LayoutForm } from "../../components/Layout";
import { ErrorMessage } from "../../components/ErrorMessage";
import { createUser } from "../../services/auth";
import { RegisterError } from "../../services/error";
import { setToken } from "../../services/localStorage";
import Logo from "../../assets/logo.svg";

export const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("saloon");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser(name, email, password, role)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        setErrorMessage(RegisterError(response));
      })
      .then((data) => {
        if(!data) return;
        console.log(data.token);
        setToken(data.token);
        navigate("/");
      })
      .catch(() => setErrorMessage(RegisterError({status:500})));
  };

  return (
    <>
      <LayoutForm>
      <img className="logo" src={Logo} alt="logo"/>
        <form className="container-form">
          <h2 className="form-title">Cadastre-se</h2>
          <InputElement
            type="text"
            label="Nome"
            value={name}
            name="input"
            placeholder="Digite o seu nome completo"
            onChange={(e) => setName(e.target.value)}
          />
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
          <div className="input-radio-container">
          <InputElement
            type="radio"
            className="input-radio"
            classNameLabel="label-radio input-label"
            label="Atendente"
            value="saloon"
            name="role"
            checked={role === "saloon"}
            onChange={(e) => setRole(e.target.value)}
          />
          <InputElement
            type="radio"
            className="input-radio"
            classNameLabel="label-radio input-label"
            label="Cozinha"
            value="kitchen"
            name="role"
            checked={role === "kitchen"}
            onChange={(e) => setRole(e.target.value)}
          />
          </div>
          <ErrorMessage
            disable={errorMessage ? false : true}
            message={errorMessage}
          />
          <Button text="Cadastrar" onClick={handleSubmit} />
        </form>
        <p className="text-center">
          <span className="text-span">Já possui conta? </span>
          <Link className="text-link" to="/">
            Conecte-se
          </Link>
        </p>
      </LayoutForm>
    </>
  );
};

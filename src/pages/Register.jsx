import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

import logo from "../assets/logo.svg";

import { apiSignUp } from "../services/api";
import { useState } from "react";

export default function Register() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [password, setPassword] = useState("");

  const signUp = (e) => {
    e.preventDefault();

    const userData = {
      email,
      name,
      image,
      password,
    };

    apiSignUp(userData)
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        alert(`
          Erro: ${err.message} 
          Detalhes: ${err.details}
        `);
      });
  };

  return (
    <LoginContainer>
      <img src={logo} alt="logo" />
      <SCTitle>TrackIt</SCTitle>

      <SCForm onSubmit={signUp}>
        <input
          type="email"
          placeholder="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required
        />
        <input
          type="password"
          placeholder="senha"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          required
        />
        <input
          type="text"
          placeholder="nome"
          onChange={(e) => {
            setName(e.target.value);
          }}
          required
        />
        <input
          type="text"
          placeholder="foto"
          onChange={(e) => {
            setImage(e.target.value);
          }}
          required
        />
        <button type="submit">Cadastrar</button>
      </SCForm>

      <Link to="/">Já tem uma conta? Faça login!</Link>
    </LoginContainer>
  );
}

const LoginContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 156px;
  }

  a {
    margin-top: 25px;
    font-weight: 400;
    font-size: 14px;
    text-decoration-line: underline;
    color: #52b6ff;
    cursor: pointer;
    transition: 300ms;

    &:hover {
      color: #126ba5;
      transition: 300ms;
    }
  }
`;

const SCTitle = styled.h1`
  font-family: "Playball";
  font-size: 70px;
  color: #126ba5;
  margin-top: 5px;
`;

const SCForm = styled.form`
  margin-top: 40px;
  width: 300px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  gap: 6px;

  input {
    width: 100%;
    height: 45px;
    background: #ffffff;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    padding-left: 11px;
    font-weight: 400;
    font-size: 19px;
    color: #666666;

    &::placeholder {
      color: #dbdbdb;
    }
  }

  button {
    width: 100%;
    height: 45px;
    border-radius: 5px;
    border: none;
    background: #52b6ff;
    font-weight: 400;
    font-size: 21px;
    color: #ffffff;
    cursor: pointer;
    transition: 300ms;

    &:hover {
      background: #126ba5;
      transition: 300ms;
    }
  }
`;

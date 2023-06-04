import { useContext } from "react";
import styled from "styled-components";

import { UserContext } from "../contexts/UserContext";

export default function Header() {
  const { state } = useContext(UserContext);

  return (
    <SCHeader>
      <SCTitle>TrackIt</SCTitle>
      {state.image ? (
        <img src={state.image} alt="imagem do usuário" />
      ) : (
        <img
          src="https://www.promoview.com.br/uploads/images/unnamed%2819%29.png"
          alt="imagem do usuário"
        />
      )}
    </SCHeader>
  );
}

const SCHeader = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
  height: 70px;
  width: 100%;
  background: #126ba5;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  align-items: center;
  padding-left: 18px;
  padding-right: 18px;

  img {
    width: 51px;
    height: 51px;
    border-radius: 51px;
  }
`;

const SCTitle = styled.h1`
  font-family: "Playball";
  font-size: 39px;
  color: #ffffff;
  margin-top: 5px;
`;

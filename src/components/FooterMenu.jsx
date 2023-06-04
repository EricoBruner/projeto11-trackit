import { Link } from "react-router-dom";
import styled from "styled-components";

export default function FooterMenu() {
  return (
    <SCContainer>
      <Link to={"/habitos"}>
        <strong>Hábitos</strong>
      </Link>
      <Link to={"/hoje"}>
        <SCCircleToday>Hoje</SCCircleToday>
      </Link>
      <Link to={"/historico"}>
        <strong>Histórico</strong>
      </Link>
    </SCContainer>
  );
}

const SCContainer = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 9;
  height: 70px;
  width: 100%;
  background: #ffffff;
  display: flex;
  justify-content: space-evenly;
  box-sizing: border-box;
  align-items: center;
  padding-left: 18px;
  padding-right: 18px;

  strong {
    font-weight: 400;
    font-size: 18px;
    color: #52b6ff;
    cursor: pointer;
  }
`;

const SCCircleToday = styled.div`
  width: 91px;
  height: 91px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 91px;
  background: #52b6ff;
  color: #ffffff;
  font-size: 18px;
  margin-bottom: 45px;
  cursor: pointer;
`;

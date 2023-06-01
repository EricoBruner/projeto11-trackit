import { useState } from "react";
import styled from "styled-components";

import FooterMenu from "../components/FooterMenu";
import Header from "../components/Header";
import CreateHabit from "../components/CreateHabit";

export default function Habits() {
  const [showCreateHabit, setShowCreateHabit] = useState(false);

  return (
    <>
      <Header />
      <SCContainer>
        <div>
          <SCTitle>Meus hábitos</SCTitle>
          <button onClick={() => setShowCreateHabit(true)}>+</button>
        </div>
        {showCreateHabit && (
          <CreateHabit setShowCreateHabit={setShowCreateHabit} />
        )}
        <p>
          Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
          começar a trackear!
        </p>
      </SCContainer>
      <FooterMenu />
    </>
  );
}

const SCContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 70px;
  width: 100%;
  align-items: center;
  padding-left: 18px;
  padding-right: 18px;
  box-sizing: border-box;

  > div {
    display: flex;
    align-items: center;
    margin-top: 28px;
    display: flex;
    justify-content: space-between;
    width: 100%;

    button {
      width: 40px;
      height: 35px;
      background: #52b6ff;
      border-radius: 4.63636px;
      color: #ffffff;
      font-size: 27px;
      font-weight: 400;
      border: none;
      cursor: pointer;
    }
  }

  p {
    margin-top: 30px;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;

    color: #666666;
  }

  form {
    margin-top: 20px;
  }
`;

const SCTitle = styled.h1`
  width: 100%;
  font-weight: 400;
  font-size: 23px;
  color: #126ba5;
`;
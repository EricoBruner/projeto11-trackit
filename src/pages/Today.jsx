import { useContext, useEffect } from "react";
import styled from "styled-components";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import Header from "../components/Header";
import FooterMenu from "../components/FooterMenu";
import updateHabitsList from "../utils/updateHabitsList";
import { UserContext } from "../contexts/UserContext";

export default function Today() {
  const { state, dispatch } = useContext(UserContext);

  useEffect(() => {
    updateHabitsList(state.token, dispatch);
  }, []);

  const dayMonth = dayjs().locale("pt-br").format("DD/MM");
  const [dayWeek] = dayjs().locale("pt-br").format("dddd").split("-", 1);
  const currentDate = `${
    dayWeek[0].toUpperCase() + dayWeek.substring(1)
  }, ${dayMonth}`;

  return (
    <>
      <Header />
      <SCContainer>
        <SCCurrentDay>{currentDate}</SCCurrentDay>
        <strong>Nenhum hábito concluído ainda</strong>
        <SCHabitList>
          <li>Ler 1 capítulo de livro</li>
          <li>Ler 1 capítulo de livro</li>
          <li>Ler 1 capítulo de livro</li>
          <li>Ler 1 capítulo de livro</li>
        </SCHabitList>
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

  strong {
    width: 100%;
    margin-top: 5px;
    font-weight: 400;
    font-size: 18px;
    color: #bababa;
  }
`;

const SCCurrentDay = styled.h1`
  width: 100%;
  margin-top: 28px;
  font-weight: 400;
  font-size: 23px;
  color: #126ba5;
`;

const SCHabitList = styled.div`
  margin-top: 40px;
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  gap: 10px;
`;

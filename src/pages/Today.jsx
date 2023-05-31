import { useContext } from "react";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import "dayjs/locale/pt-br";

import Header from "../components/Header";
import FooterMenu from "../components/FooterMenu";

import { UserContext } from "../contexts/UserContext";

import styled from "styled-components";

export default function Today() {
  dayjs.extend(advancedFormat);
  dayjs.locale("pt-br");
  const dayMonth = dayjs().format("DD/MM");
  const [dayWeek] = dayjs().format("dddd").split("-", 1);
  const currentDate = `${
    dayWeek[0].toUpperCase() + dayWeek.substring(1)
  }, ${dayMonth}`;

  const { user } = useContext(UserContext);

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

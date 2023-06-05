import { useContext, useEffect } from "react";
import styled from "styled-components";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import Header from "../components/Header";
import FooterMenu from "../components/FooterMenu";
import { UserContext } from "../contexts/UserContext";
import updateHabitsListToday from "../utils/updateHabitsListToday";
import HabitToday from "../components/HabitToday";

export default function Today() {
  const { state, dispatch } = useContext(UserContext);

  useEffect(() => {
    updateHabitsListToday(state.token, dispatch);
  }, []);

  const dayMonth = dayjs().locale("pt-br").format("DD/MM");
  const [dayWeek] = dayjs().locale("pt-br").format("dddd").split("-", 1);
  const currentDate = `${
    dayWeek[0].toUpperCase() + dayWeek.substring(1)
  }, ${dayMonth}`;

  console.log(state.habitsToday);

  return (
    <>
      <Header />
      <SCContainer>
        <SCCurrentDay>{currentDate}</SCCurrentDay>
        {state.percentageHabitsCompleted === 0 ? (
          <SCSubtitle>Nenhum hábito concluído ainda</SCSubtitle>
        ) : (
          <SCSubtitleGreen>
            {state.percentageHabitsCompleted}% dos hábitos concluídos
          </SCSubtitleGreen>
        )}
        <SCHabitList>
          {state.habitsToday.map((habit) => (
            <HabitToday key={habit.id} habit={habit} />
          ))}
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

const SCSubtitle = styled.strong`
  width: 100%;
  margin-top: 5px;
  font-weight: 400;
  font-size: 18px;
  color: #bababa;
`;

const SCSubtitleGreen = styled.strong`
  width: 100%;
  margin-top: 5px;
  font-weight: 400;
  font-size: 18px;
  color: #8fc549;
`;

import { Link } from "react-router-dom";
import styled from "styled-components";
import ProgressBar from "./ProgressBar";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { useEffect } from "react";

export default function FooterMenu() {
  const { state, dispatch } = useContext(UserContext);

  useEffect(() => {
    const completedHabits = state.habitsToday.reduce((count, habit) => {
      return habit.done ? count + 1 : count;
    }, 0);

    let percentageCompleted = (
      (completedHabits / state.habitsToday.length) *
      100
    ).toFixed();

    if (state.habitsToday.length === 0) {
      percentageCompleted = 0;
    }

    dispatch({
      type: "updatePercentageHabitsCompleted",
      data: percentageCompleted,
    });
  }, [state.habitsToday]);

  return (
    <SCContainer data-test="menu">
      <Link to={"/habitos"} data-test="habit-link">
        <strong>Hábitos</strong>
      </Link>
      <Link to={"/hoje"} data-test="today-link">
        <SCCircleToday>
          <ProgressBar percentage={state.percentageHabitsCompleted} />
          <strong>Hoje</strong>
        </SCCircleToday>
      </Link>
      <Link to={"/historico"} data-test="history-link">
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
  padding: 6px;
  margin-bottom: 45px;
  cursor: pointer;
  position: relative;

  > strong {
    color: #ffffff;
    font-size: 18px;
    position: absolute;
  }
`;

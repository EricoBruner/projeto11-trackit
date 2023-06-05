import styled from "styled-components";

import { apiDoneHabitToday, apiUncheckHabitToday } from "../services/api";
import updateHabitsListToday from "../utils/updateHabitsListToday";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export default function HabitToday({ habit }) {
  const { state, dispatch } = useContext(UserContext);

  const recordCurrent =
    habit.highestSequence > 0 && habit.currentSequence === habit.highestSequence
      ? true
      : false;

  const checkDone = () => {
    apiDoneHabitToday(habit.id, state.token)
      .then((res) => {
        updateHabitsListToday(state.token, dispatch);
      })
      .catch((err) => {
        alert(`
          Erro: ${err.message} 
          Detalhes: ${err.details}
        `);
      });
  };

  const uncheckDone = () => {
    apiUncheckHabitToday(habit.id, state.token)
      .then((res) => {
        updateHabitsListToday(state.token, dispatch);
      })
      .catch((err) => {
        alert(`
          Erro: ${err.message} 
          Detalhes: ${err.details}
        `);
      });
  };

  return (
    <SCContainer
      data-test="today-habit-container"
      done={habit.done}
      recordCurrent={recordCurrent}
    >
      <div>
        <h1 data-test="today-habit-name">{habit.name}</h1>
        <h2 data-test="today-habit-sequence">
          Sequência atual: <strong>{habit.currentSequence} dias</strong>
        </h2>
        <h2 data-test="today-habit-record">
          Seu recorde: <strong>{habit.highestSequence} dias</strong>
        </h2>
      </div>
      <ion-icon
        data-test="today-habit-check-btn"
        onClick={() => {
          habit.done ? uncheckDone() : checkDone();
        }}
        name="checkbox"
      ></ion-icon>
    </SCContainer>
  );
}

const SCContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  box-sizing: border-box;
  padding: 15px;
  width: 100%;
  min-height: 90px;
  background: #ffffff;
  border-radius: 5px;
  position: relative;

  > div {
    display: flex;
    flex-direction: column;
  }

  > div > h1 {
    font-weight: 400;
    font-size: 20px;
    color: #666666;
    margin-bottom: 7px;
  }

  > div > h2 {
    font-weight: 400;
    font-size: 13px;
    color: #666666;

    strong {
      color: ${({ done }) => (done ? "#8FC549" : "#666666")};
      font-weight: 400;
      font-size: 13px;
    }

    &:last-child {
      strong {
        color: ${({ recordCurrent }) =>
          recordCurrent ? "#8FC549" : "#666666"};
      }
    }
  }

  > ion-icon {
    color: ${({ done }) => (done ? "#8FC549" : "#ebebeb")};
    font-size: 60px;
  }
`;

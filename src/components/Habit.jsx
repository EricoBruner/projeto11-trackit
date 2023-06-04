import { useContext } from "react";
import styled from "styled-components";
import DAYS from "../utils/days";
import BoxWeekday from "./BoxWeekday";
import { apiDeleteHabit } from "../services/api";
import { UserContext } from "../contexts/UserContext";
import updateHabitsList from "../utils/updateHabitsList";

export default function Habit({ habit }) {
  const { state, dispatch } = useContext(UserContext);

  const deleteHabit = () => {
    apiDeleteHabit(habit.id, state.token)
      .then((res) => {
        updateHabitsList(state.token, dispatch);
      })
      .catch((err) => {
        alert(`
          Erro: ${err.message} 
          Detalhes: ${err.details}
        `);
      });
  };

  return (
    <SCContainer>
      <h1>{habit.name}</h1>
      <SCBoxList>
        {DAYS.map(({ day, number }) => (
          <BoxWeekday
            key={number}
            day={day}
            number={number}
            habitDays={habit.days}
          />
        ))}
      </SCBoxList>
      <ion-icon onClick={() => deleteHabit()} name="trash-outline"></ion-icon>
    </SCContainer>
  );
}

const SCContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;
  box-sizing: border-box;
  padding: 15px;
  width: 100%;
  min-height: 90px;
  background: #ffffff;
  border-radius: 5px;
  position: relative;

  > h1 {
    font-weight: 400;
    font-size: 20px;
    color: #666666;
  }

  > ion-icon {
    position: absolute;
    right: 9px;
    top: 11px;
    font-size: 20px;
    color: #666666;
    cursor: pointer;
  }
`;

const SCBoxList = styled.div`
  display: flex;
  width: 100%;
  gap: 4px;
`;

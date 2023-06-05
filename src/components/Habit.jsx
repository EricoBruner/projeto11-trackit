import { useContext, useState } from "react";
import styled from "styled-components";
import DAYS from "../utils/days";
import BoxWeekday from "./BoxWeekday";
import { apiDeleteHabit } from "../services/api";
import { UserContext } from "../contexts/UserContext";
import updateHabitsList from "../utils/updateHabitsList";

export default function Habit({ habit }) {
  const [showDeleteButton, setShowDeleteButton] = useState(false);
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
    <SCContainer data-test="habit-container">
      <h1 data-test="habit-name">{habit.name}</h1>
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

      {showDeleteButton ? (
        <SCBoxButtons>
          <SCDeleteButton onClick={() => deleteHabit()}>Deletar</SCDeleteButton>
          <SCCancelButton onClick={() => setShowDeleteButton(false)}>
            Cancelar
          </SCCancelButton>
        </SCBoxButtons>
      ) : (
        <ion-icon
          data-test="habit-delete-btn"
          onClick={() => setShowDeleteButton(true)}
          name="trash-outline"
        ></ion-icon>
      )}
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

const SCBoxButtons = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  gap: 20px;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 5px;
  background: rgb(0, 0, 0, 0.7);
`;

const SCCancelButton = styled.button`
  width: 84px;
  height: 35px;
  font-weight: 400;
  font-size: 16px;
  background: #ffffff;
  border: none;
  color: #000000;
  border-radius: 5px;
  cursor: pointer;
`;

const SCDeleteButton = styled.button`
  width: 84px;
  height: 35px;
  font-weight: 400;
  font-size: 16px;
  background: #ff5252;
  border-radius: 5px;
  border: none;
  color: #ffffff;
  cursor: pointer;
`;

import styled from "styled-components";
import { useState, useContext } from "react";

import CheckBox from "./CheckBox";

import { apiCreateHabit } from "../services/api";
import DAYS from "../utils/days";

import { UserContext } from "../contexts/UserContext";
import LoadingDots from "./LoadingDots";

export default function CreateHabit({ setShowCreateHabit }) {
  const { state, dispatch } = useContext(UserContext);
  const [habitName, setHabitName] = useState("");
  const [selectedDays, setSelectedDays] = useState([]);
  const [loading, setLoading] = useState(false);

  const CreateHabit = (e) => {
    e.preventDefault();
    setLoading(true);

    const habitData = {
      name: habitName,
      days: selectedDays,
    };

    apiCreateHabit(habitData, state.token)
      .then((res) => {
        setShowCreateHabit(false);
        dispatch({ type: "saveOneHabit", data: res.data });
        setLoading(false);
      })
      .catch((err) => {
        alert(`
          Erro: ${err.message} 
          Detalhes: ${err.details}
        `);
        setLoading(false);
      });
  };

  return (
    <SCForm data-test="habit-create-container" onSubmit={CreateHabit}>
      <SCInput
        data-test="habit-name-input"
        disabled={loading}
        type="text"
        placeholder="nome do hábito"
        onChange={(e) => {
          setHabitName(e.target.value);
        }}
        required
      />

      <SCChecks>
        {DAYS.map(({ day, number }) => (
          <CheckBox
            key={number}
            day={day}
            value={number}
            setSelectedDays={setSelectedDays}
            selectedDays={selectedDays}
            disabled={loading}
          />
        ))}
      </SCChecks>

      <SCButtons>
        <SCCancelButton
          data-test="habit-create-cancel-btn"
          disabled={loading}
          onClick={() => {
            setShowCreateHabit(false);
          }}
        >
          Cancelar
        </SCCancelButton>
        <SCSaveButton
          data-test="habit-create-save-btn"
          type="submit"
          disabled={loading}
        >
          {loading ? <LoadingDots /> : "Salvar"}
        </SCSaveButton>
      </SCButtons>
    </SCForm>
  );
}

const SCForm = styled.form`
  width: 100%;
  max-width: 400px;
  background: #ffffff;
  border-radius: 5px;
  padding: 18px;
  box-sizing: border-box;
`;

const SCInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 45px;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  padding-left: 12px;
  font-weight: 400;
  font-size: 20px;
  color: #666666;

  &::placeholder {
    color: #dbdbdb;
  }
`;

const SCButtons = styled.div`
  display: flex;
  gap: 5px;
  margin-top: 30px;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: end;
`;

const SCCancelButton = styled.button`
  width: 84px;
  height: 35px;
  font-weight: 400;
  font-size: 16px;
  background: none;
  border: none;
  color: #52b6ff;
`;

const SCSaveButton = styled.button`
  width: 84px;
  height: 35px;
  font-weight: 400;
  font-size: 16px;
  background: #52b6ff;
  border-radius: 5px;
  border: none;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SCChecks = styled.div`
  display: flex;
  margin-top: 8px;
  gap: 4px;
`;

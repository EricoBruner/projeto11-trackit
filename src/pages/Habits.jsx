import { useContext, useEffect, useState } from "react";
import styled from "styled-components";

import FooterMenu from "../components/FooterMenu";
import Header from "../components/Header";
import CreateHabit from "../components/CreateHabit";

import { UserContext } from "../contexts/UserContext";
import Habit from "../components/Habit";
import updateHabitsList from "../utils/updateHabitsList";

export default function Habits() {
  const { state, dispatch } = useContext(UserContext);
  const [showCreateHabit, setShowCreateHabit] = useState(false);

  useEffect(() => {
    updateHabitsList(state.token, dispatch);
  }, []);

  return (
    <>
      <Header />
      <SCContainer>
        <div>
          <SCTitle>Meus hábitos</SCTitle>
          <button
            data-test="habit-create-btn"
            onClick={() => setShowCreateHabit(true)}
          >
            +
          </button>
        </div>
        {showCreateHabit && (
          <CreateHabit setShowCreateHabit={setShowCreateHabit} />
        )}

        {state.habits.length === 0 ? (
          <p>
            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
            começar a trackear!
          </p>
        ) : (
          <SCHabitList>
            {state.habits.map((habit) => (
              <Habit key={habit.id} habit={habit} />
            ))}
          </SCHabitList>
        )}
      </SCContainer>
      <FooterMenu />
    </>
  );
}

const SCContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 70px;
  margin-bottom: 140px;
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

    > button {
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

const SCHabitList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

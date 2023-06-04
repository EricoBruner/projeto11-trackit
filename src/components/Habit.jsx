import styled from "styled-components";
import DAYS from "../utils/days";
import BoxWeekday from "./BoxWeekday";

export default function Habit({ habit }) {
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
      <ion-icon name="trash-outline"></ion-icon>
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

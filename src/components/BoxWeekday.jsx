import styled from "styled-components";

export default function BoxWeekday({ day, number, habitDays }) {
  const selectedDay = habitDays.includes(number);

  return (
    <SCBox data-test="habit-day" checked={selectedDay}>
      <span>{day}</span>
    </SCBox>
  );
}

const SCBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 30px;
  height: 30px;
  font-weight: 400;
  font-size: 20px;
  border: 1px solid #d5d5d5;
  border-radius: 5px;

  background: ${({ checked }) => {
    return checked ? "#CFCFCF" : "#ffffff";
  }};

  span {
    color: ${({ checked }) => {
      return checked ? "#ffffff" : "#CFCFCF";
    }};
  }
`;

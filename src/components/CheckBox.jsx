import styled from "styled-components";

export default function CheckBox({
  day,
  value,
  setSelectedDays,
  selectedDays,
  disabled,
}) {
  const handleCheckboxChange = (e) => {
    const checked = e.target.checked;

    if (checked) {
      setSelectedDays((prevSelectedDays) => [...prevSelectedDays, value]);
    } else {
      setSelectedDays((prevSelectedDays) =>
        prevSelectedDays.filter((numberDay) => numberDay !== value)
      );
    }
  };

  return (
    <SCLabel>
      <input
        data-test="habit-day"
        type="checkbox"
        value={value}
        checked={selectedDays.includes(value)}
        onChange={handleCheckboxChange}
        disabled={disabled}
      />
      <span>{day}</span>
    </SCLabel>
  );
}

const SCLabel = styled.label`
  display: flex;

  input {
    opacity: 0;
    width: 0;
    height: 0;

    &:checked + span {
      background: #cfcfcf;
      color: #ffffff;
    }
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    width: 30px;
    height: 30px;
    font-weight: 400;
    font-size: 20px;
    color: #dbdbdb;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    background: #ffffff;
  }
`;

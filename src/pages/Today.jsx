import { useContext } from "react";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import "dayjs/locale/pt-br";

import Header from "../components/Header";
import FooterMenu from "../components/FooterMenu";

import { UserContext } from "../contexts/UserContext";

import styled from "styled-components";

export default function Today() {
  dayjs.extend(advancedFormat);
  dayjs.locale("pt-br");
  const dayMonth = dayjs().format("DD/MM");
  const [dayWeek] = dayjs().format("dddd").split("-", 1);
  const currentDate = `${
    dayWeek[0].toUpperCase() + dayWeek.substring(1)
  }, ${dayMonth}`;

  const { user } = useContext(UserContext);

  return (
    <>
      <Header />
      <SCContainer>{currentDate}</SCContainer>
      <FooterMenu />
    </>
  );
}

const SCContainer = styled.div`
  margin-top: 70px;
`;

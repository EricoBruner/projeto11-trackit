import styled from "styled-components";
import FooterMenu from "../components/FooterMenu";
import Header from "../components/Header";

export default function Historic() {
  return (
    <>
      <Header />
      <SCContainer>
        <SCTitle>Meus hábitos</SCTitle>
        <strong>
          Em breve você poderá ver o histórico dos seus hábitos aqui!
        </strong>
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

  strong {
    margin-top: 17px;
    font-weight: 400;
    font-size: 18px;
    color: #666666;
  }
`;

const SCTitle = styled.h1`
  margin-top: 28px;
  width: 100%;
  font-weight: 400;
  font-size: 23px;
  color: #126ba5;
`;

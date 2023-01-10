import React from "react";
import styled from "styled-components";
import Main from "../../modules/Main";

const MainPage = () => {
  return (
    <Container>
      <Main />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  column-gap: 20px;
  row-gap: 20px;
  position: relative;
  height: 202px;
  width: 184px;
  margin: 0 auto;
  padding: 100px 0;
`;

export default MainPage;

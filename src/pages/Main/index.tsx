import React from "react";

// helpers
import styled from "styled-components";

// components
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
  margin: 0 auto;
  padding: 100px 40px;
`;

export default MainPage;

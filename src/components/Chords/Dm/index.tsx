import React from "react";
import styled from "styled-components";
import Chord from "..";

const Dm = () => {
  return (
    <Chord nameOfChord="Dm">
      <FirstString />
      <ThirdString />
      <SecondString />
    </Chord>
  );
};
const FirstString = styled.div`
  position: absolute;
  height: 20px;
  width: 20px;
  background: black;
  border-radius: 50%;
  top: 15px;
  left: 171px;
`;

const ThirdString = styled.div`
  position: absolute;
  height: 20px;
  width: 20px;
  background: black;
  border-radius: 50%;
  top: 52px;
  left: 98px;
`;

const SecondString = styled.div`
  position: absolute;
  height: 20px;
  width: 20px;
  background: black;
  border-radius: 50%;
  top: 92px;
  left: 134px;
`;
export default Dm;

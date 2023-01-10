import React from "react";
import styled from "styled-components";
import Chord from "..";

const D = () => {
  return (
    <Chord nameOfChord="D">
      <ThirdString />
      <SecondString />
      <FirstString />
    </Chord>
  );
};
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

const FirstString = styled.div`
  position: absolute;
  height: 20px;
  width: 20px;
  background: black;
  border-radius: 50%;
  top: 52px;
  left: 171px;
`;
export default D;

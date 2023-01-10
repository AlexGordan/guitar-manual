import React from "react";
import styled from "styled-components";
import Chord from "..";

const C = () => {
  return (
    <Chord nameOfChord="C">
      <SecondString />
      <FourthString />
      <FifthString />
    </Chord>
  );
};
const SecondString = styled.div`
  position: absolute;
  height: 20px;
  width: 20px;
  background: black;
  border-radius: 50%;
  top: 15px;
  left: 134px;
`;

const FourthString = styled.div`
  position: absolute;
  height: 20px;
  width: 20px;
  background: black;
  border-radius: 50%;
  top: 52px;
  left: 62px;
`;

const FifthString = styled.div`
  position: absolute;
  height: 20px;
  width: 20px;
  background: black;
  border-radius: 50%;
  top: 92px;
  left: 25px;
`;
export default C;

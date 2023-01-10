import React from "react";
import styled from "styled-components";
import Chord from "..";

const A = () => {
  return (
    <Chord nameOfChord="A">
      <FourthString />
      <ThirdString />
      <SecondString />
    </Chord>
  );
};

const FourthString = styled.div`
  position: absolute;
  height: 20px;
  width: 20px;
  background: black;
  border-radius: 50%;
  top: 52px;
  left: 62px;
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
  top: 52px;
  left: 135px;
`;

export default A;

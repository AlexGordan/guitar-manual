import React from "react";
import styled from "styled-components";
import Chord from "..";

const Am = () => {
  return (
    <Chord nameOfChord="Am">
      <SecondString />
      <ThirdString />
      <FourthString />
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

const ThirdString = styled.div`
  position: absolute;
  height: 20px;
  width: 20px;
  background: black;
  border-radius: 50%;
  top: 52px;
  left: 98px;
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

export default Am;

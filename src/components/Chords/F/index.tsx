import React from "react";
import styled from "styled-components";
import Chord from "..";

const F = () => {
  return (
    <Chord nameOfChord="F">
      <Barre>
        <SixthStringB />
        <Line />
        <FirstStringB />
      </Barre>
      <ThirdString />
      <FourthString />
      <FifthString />
    </Chord>
  );
};

const Barre = styled.div``;

const SixthStringB = styled.div`
  position: absolute;
  height: 20px;
  width: 20px;
  background: black;
  border-radius: 50%;
  top: 15px;
  left: -11px;
`;

const Line = styled.div`
  width: 100%;
  position: absolute;
  height: 4px;
  background: black;
  top: 23px;
`;

const FirstStringB = styled.div`
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

const FourthString = styled.div`
  position: absolute;
  height: 20px;
  width: 20px;
  background: black;
  border-radius: 50%;
  top: 92px;
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
export default F;

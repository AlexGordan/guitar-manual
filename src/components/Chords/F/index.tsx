import React from "react";
import styled from "styled-components";
import Chord, { ChordCircle } from "..";

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

const SixthStringB = styled(ChordCircle)`
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

const FirstStringB = styled(ChordCircle)`
  top: 15px;
  left: 166px;
`;

const ThirdString = styled(ChordCircle)`
  top: 52px;
  left: 95px;
`;

const FourthString = styled(ChordCircle)`
  top: 92px;
  left: 60px;
`;

const FifthString = styled(ChordCircle)`
  top: 92px;
  left: 24px;
`;
export default F;

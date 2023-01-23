import React from "react";
import styled from "styled-components";
import Chord, { ChordCircle } from "..";

const H = () => {
  return (
    <Chord nameOfChord="H">
      <Barre>
        <FifthStringB />
        <Line />
        <FirstStringB />
      </Barre>
      <SecondString />
      <ThirdString />
      <FourthString />
    </Chord>
  );
};

const Barre = styled.div``;

const FifthStringB = styled(ChordCircle)`
  top: 52px;
  left: 24px;
`;

const Line = styled.div`
  width: 160px;
  position: absolute;
  height: 4px;
  background: black;
  top: 60px;
  left: 25px;
`;

const FirstStringB = styled(ChordCircle)`
  top: 52px;
  left: 166px;
`;

const SecondString = styled(ChordCircle)`
  top: 134px;
  left: 131px;
`;

const ThirdString = styled(ChordCircle)`
  top: 134px;
  left: 95px;
`;

const FourthString = styled(ChordCircle)`
  top: 134px;
  left: 60px;
`;
export default H;

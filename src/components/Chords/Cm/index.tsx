import React from "react";
import styled from "styled-components";
import Chord, { ChordCircle } from "..";

const Cm = () => {
  return (
    <Chord nameOfChord="Cm">
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
  top: 92px;
  left: 24px;
`;

const Line = styled.div`
  height: 4px;
  width: 150px;
  position: absolute;
  background: black;
  top: 100px;
  left: 30px;
`;

const FirstStringB = styled(ChordCircle)`
  top: 92px;
  left: 166px;
`;

const SecondString = styled(ChordCircle)`
  top: 134px;
  left: 131px;
`;

const ThirdString = styled(ChordCircle)`
  top: 171px;
  left: 95px;
`;

const FourthString = styled(ChordCircle)`
  top: 171px;
  left: 60px;
`;
export default Cm;

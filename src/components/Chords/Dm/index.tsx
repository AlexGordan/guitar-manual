import React from "react";
import styled from "styled-components";
import Chord, { ChordCircle } from "..";

const Dm = () => {
  return (
    <Chord nameOfChord="Dm">
      <FirstString />
      <ThirdString />
      <SecondString />
    </Chord>
  );
};
const FirstString = styled(ChordCircle)`
  top: 15px;
  left: 166px;
`;

const ThirdString = styled(ChordCircle)`
  top: 52px;
  left: 95px;
`;

const SecondString = styled(ChordCircle)`
  top: 92px;
  left: 131px;
`;
export default Dm;

import React from "react";
import styled from "styled-components";
import Chord, { ChordCircle } from "..";

const D = () => {
  return (
    <Chord nameOfChord="D">
      <ThirdString />
      <SecondString />
      <FirstString />
    </Chord>
  );
};
const ThirdString = styled(ChordCircle)`
  top: 52px;
  left: 95px;
`;

const SecondString = styled(ChordCircle)`
  top: 92px;
  left: 131px;
`;

const FirstString = styled(ChordCircle)`
  top: 52px;
  left: 167px;
`;
export default D;

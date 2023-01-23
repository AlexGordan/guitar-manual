import React from "react";
import styled from "styled-components";
import Chord, { ChordCircle } from "..";

const G = () => {
  return (
    <Chord nameOfChord="G">
      <FifthString />
      <SixthString />
      <FirstString />
    </Chord>
  );
};
const FifthString = styled(ChordCircle)`
  top: 52px;
  left: 24px;
`;

const SixthString = styled(ChordCircle)`
  top: 92px;
  left: -11px;
`;

const FirstString = styled(ChordCircle)`
  top: 92px;
  left: 166px;
`;
export default G;

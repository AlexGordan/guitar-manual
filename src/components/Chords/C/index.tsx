import React from "react";
import styled from "styled-components";
import Chord, { ChordCircle } from "..";

const C = () => {
  return (
    <Chord nameOfChord="C">
      <SecondString />
      <FourthString />
      <FifthString />
    </Chord>
  );
};
const SecondString = styled(ChordCircle)`
  top: 15px;
  left: 131px;
`;

const FourthString = styled(ChordCircle)`
  top: 52px;
  left: 60px;
`;

const FifthString = styled(ChordCircle)`
  top: 92px;
  left: 24px;
`;
export default C;

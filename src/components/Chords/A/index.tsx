import React from "react";
import styled from "styled-components";
import Chord, { ChordCircle } from "..";

const A = () => {
  return (
    <Chord nameOfChord="A">
      <FourthString />
      <ThirdString />
      <SecondString />
    </Chord>
  );
};

const FourthString = styled(ChordCircle)`
  top: 52px;
  left: 60px;
`;

const ThirdString = styled(ChordCircle)`
  top: 52px;
  left: 95px;
`;

const SecondString = styled(ChordCircle)`
  top: 52px;
  left: 131px;
`;

export default A;

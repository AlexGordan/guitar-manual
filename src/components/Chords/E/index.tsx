import React from "react";
import styled from "styled-components";
import Chord, { ChordCircle } from "..";

const E = () => {
  return (
    <Chord nameOfChord="E">
      <ThirdString />
      <FourthString />
      <FifthString />
    </Chord>
  );
};

const ThirdString = styled(ChordCircle)`
  top: 15px;
  left: 95px;
`;

const FourthString = styled(ChordCircle)`
  top: 52px;
  left: 60px;
`;

const FifthString = styled(ChordCircle)`
  top: 52px;
  left: 24px;
`;

export default E;

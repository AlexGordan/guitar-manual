import React from "react";
import styled from "styled-components";
import Chord, { ChordCircle } from "..";

const Am = () => {
  return (
    <Chord nameOfChord="Am">
      <SecondString />
      <ThirdString />
      <FourthString />
    </Chord>
  );
};

const SecondString = styled(ChordCircle)`
  top: 15px;
  left: 131px;
`;

const ThirdString = styled(ChordCircle)`
  top: 52px;
  left: 96px;
`;

const FourthString = styled(ChordCircle)`
  top: 52px;
  left: 60px;
`;

export default Am;

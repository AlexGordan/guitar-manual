import React from "react";
import styled from "styled-components";
import Chord, { ChordCircle } from "..";

const Em = () => {
  return (
    <Chord nameOfChord="Em">
      <FourthString />
      <FifthString />
    </Chord>
  );
};

const FourthString = styled(ChordCircle)`
  top: 52px;
  left: 60px;
`;

const FifthString = styled(ChordCircle)`
  top: 52px;
  left: 24px;
`;
export default Em;

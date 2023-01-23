import React from "react";
import styled from "styled-components";
import Chord, { ChordCircle } from "..";

const Gm = () => {
  return (
    <Chord nameOfChord="Gm">
      <Barre>
        <SixthStringB />
        <Line />
        <FirstStringB />
      </Barre>
      <FourthString />
      <FifthString />
    </Chord>
  );
};

const Barre = styled.div``;

const SixthStringB = styled(ChordCircle)`
  top: 92px;
  left: -11px;
`;

const Line = styled.div`
  width: 100%;
  position: absolute;
  height: 4px;
  background: black;
  top: 100px;
`;

const FirstStringB = styled(ChordCircle)`
  top: 92px;
  left: 166px;
`;

const FourthString = styled(ChordCircle)`
  top: 171px;
  left: 60px;
`;

const FifthString = styled(ChordCircle)`
  top: 171px;
  left: 24px;
`;

export default Gm;

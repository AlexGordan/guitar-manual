import React from "react";
import styled from "styled-components";
import Chord from "..";

const G = () => {
  return (
    <Chord nameOfChord="G">
      <FifthString />
      <SixthString />
      <FirstString />
    </Chord>
  );
};
const FifthString = styled.div`
  position: absolute;
  height: 20px;
  width: 20px;
  background: black;
  border-radius: 50%;
  top: 52px;
  left: 25px;
`;

const SixthString = styled.div`
  position: absolute;
  height: 20px;
  width: 20px;
  background: black;
  border-radius: 50%;
  top: 92px;
  left: -11px;
`;

const FirstString = styled.div`
  position: absolute;
  height: 20px;
  width: 20px;
  background: black;
  border-radius: 50%;
  top: 92px;
  left: 171px;
`;
export default G;

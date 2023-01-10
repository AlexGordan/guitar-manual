import React from "react";
import styled from "styled-components";
import Chord from "..";

const E = () => {
  return (
    <Chord nameOfChord="E">
      <ThirdString />
      <FourthString />
      <FifthString />
    </Chord>
  );
};

const ThirdString = styled.div`
  position: absolute;
  height: 20px;
  width: 20px;
  background: black;
  border-radius: 50%;
  top: 15px;
  left: 98px;
`;

const FourthString = styled.div`
  position: absolute;
  height: 20px;
  width: 20px;
  background: black;
  border-radius: 50%;
  top: 52px;
  left: 62px;
`;

const FifthString = styled.div`
  position: absolute;
  height: 20px;
  width: 20px;
  background: black;
  border-radius: 50%;
  top: 52px;
  left: 25px;
`;

export default E;

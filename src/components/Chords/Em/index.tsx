import React from "react";
import styled from "styled-components";
import Chord from "..";

const Em = () => {
  return (
    <Chord nameOfChord="Em">
      <FourthString />
      <FifthString />
    </Chord>
  );
};

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
export default Em;

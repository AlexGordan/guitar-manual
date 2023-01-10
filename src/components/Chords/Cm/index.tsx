import React from "react";
import styled from "styled-components";
import Chord from "..";

const Cm = () => {
  return (
    <Chord nameOfChord="Cm">
      <Barre>
        <FifthStringB />
        <Line />
        <FirstStringB />
      </Barre>
      <SecondString />
      <ThirdString />
      <FourthString />
    </Chord>
  );
};
const Barre = styled.div``;

const FifthStringB = styled.div`
  position: absolute;
  height: 20px;
  width: 20px;
  background: black;
  border-radius: 50%;
  top: 92px;
  left: 25px;
`;

const Line = styled.div`
  height: 4px;
  width: 150px;
  position: absolute;
  background: black;
  top: 100px;
  left: 30px;
`;

const FirstStringB = styled.div`
  position: absolute;
  height: 20px;
  width: 20px;
  background: black;
  border-radius: 50%;
  top: 92px;
  left: 171px;
`;

const SecondString = styled.div`
  position: absolute;
  height: 20px;
  width: 20px;
  background: black;
  border-radius: 50%;
  top: 134px;
  left: 134px;
`;

const ThirdString = styled.div`
  position: absolute;
  height: 20px;
  width: 20px;
  background: black;
  border-radius: 50%;
  top: 171px;
  left: 98px;
`;

const FourthString = styled.div`
  position: absolute;
  height: 20px;
  width: 20px;
  background: black;
  border-radius: 50%;
  top: 171px;
  left: 62px;
`;
export default Cm;

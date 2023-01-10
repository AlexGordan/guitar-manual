import React from "react";
import styled from "styled-components";
import Chord from "..";

const Hm = () => {
  return (
    <Chord nameOfChord="Hm">
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
  top: 52px;
  left: 25px;
`;

const Line = styled.div`
  width: 160px;
  position: absolute;
  height: 4px;
  background: black;
  top: 60px;
  left: 25px;
`;

const FirstStringB = styled.div`
  position: absolute;
  height: 20px;
  width: 20px;
  background: black;
  border-radius: 50%;
  top: 52px;
  left: 171px;
`;

const SecondString = styled.div`
  position: absolute;
  height: 20px;
  width: 20px;
  background: black;
  border-radius: 50%;
  top: 92px;
  left: 135px;
`;

const ThirdString = styled.div`
  position: absolute;
  height: 20px;
  width: 20px;
  background: black;
  border-radius: 50%;
  top: 134px;
  left: 98px;
`;

const FourthString = styled.div`
  position: absolute;
  height: 20px;
  width: 20px;
  background: black;
  border-radius: 50%;
  top: 134px;
  left: 62px;
`;

export default Hm;

import React from "react";
import styled from "styled-components";
import { ChordTypes } from "../../../typings/Chord";

interface IChordProps {
  data: ChordTypes | null;
}

const Chord = ({ data }: IChordProps) => {
  return (
    <StyledContainer>
      <BolderLine />
      <StringsContainer>
        {[6, 5, 4, 3, 2, 1].map((_, index) => {
          return <GuitarString index={index} />;
        })}
      </StringsContainer>
      <FretsContainer>
        {[1, 2, 3, 4, 5].map((_) => {
          return <Fret />;
        })}
      </FretsContainer>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  height: 200px;
  width: 180px;
  border: solid 2px;
  position: absolute;
  left: 200px;
  top: 200px;
`;

const BolderLine = styled.div`
  width: 100%;
  height: 10px;
  background: black;
`;

const GuitarString = styled.div<{ index: number }>`
  height: 100%;
  background: black;
  width: ${({ index }) => (index && index !== 5 ? "2px" : "0")};
`;

const StringsContainer = styled.div`
  height: calc(100% - 10px);
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const FretsContainer = styled.div`
  position: absolute;
  height: calc(100% - 35px);
  width: 100%;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: self-end;
  justify-content: space-between;
`;

const Fret = styled.div`
  height: 2px;
  width: 100%;
  background: black;
`;

export default Chord;

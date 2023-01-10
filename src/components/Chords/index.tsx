import React from "react";
import styled from "styled-components";

const strings = [6, 5, 4, 3, 2, 1];
const frets = [1, 2, 3, 4, 5];

interface IProps {
  nameOfChord: string;
  children: any;
}

const Chord = ({ nameOfChord, children }: IProps) => {
  return (
    <StyledContainer>
      <NameOfChord>{nameOfChord}</NameOfChord>
      <BolderLine />
      <StringsContainer>
        {strings.map((_, i) => (
          <GuitarString key={i} index={i} />
        ))}
      </StringsContainer>
      <FretsContainer>
        {frets.map((_, i) => (
          <Fret key={i} />
        ))}
      </FretsContainer>
      {children}
    </StyledContainer>
  );
};

const NameOfChord = styled.div`
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 30px;
  font-weight: 600;
`;

const StyledContainer = styled.div`
  height: 200px;
  width: 180px;
  border: solid 2px;
  position: absolute;
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

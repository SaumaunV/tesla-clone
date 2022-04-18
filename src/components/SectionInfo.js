import React from "react";
import styled from "styled-components";
import { Wrapper, ItemText } from "./Section";

function SectionInfo(props) {
  return (
    <Wrapper bgImage={props.backgroundImage}>
      <ItemText>
        <h1>{props.title}</h1>
        {props.description && <p>{props.description}</p>}
      </ItemText>
      <InfoText>
        {props.info.map((elem, index) => (
          <InfoItemText key={index}>
            <div>{elem}</div>
            <p>{props.infoDescription[index]}</p>
          </InfoItemText>
        ))}
        <Button>Order Now</Button>
      </InfoText>
    </Wrapper>
  );
}

export default SectionInfo;


const InfoText = styled.div`
  display: flex;
  margin-bottom: 5vh;
`;

const InfoItemText = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  width: 160px;
  align-items: center;

  div,
  p {
    color: white;
  }

  div {
    font-size: 28px;
    font-weight: 500;
  }

  p {
    font-size: 12px;
    font-weight: 500;
    padding: 7px;
  }
`;

const Button = styled.button`
  width: 212px;
  height: 40px;
  margin: 10px;
  margin-left: 20px;
  background-color: transparent;
  color: white;
  border: 3px solid white;
  border-radius: 20px;
  text-transform: uppercase;
  font-weight: 500;
  cursor: pointer;
`;

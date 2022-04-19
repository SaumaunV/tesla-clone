import React from "react";
import styled from "styled-components";

function Jumbotron(props) {
  return (
    <Container>
      {props.images.map((elem, index) => (
        <Item key={index} direction={props.direction[index]}>
          <ImageWrapper>
            <img src={`/images/${elem}`} alt={`${elem}`} />
          </ImageWrapper>
          <TextWrapper>
            <h1>{props.title[index]}</h1>
            <p>{props.description[index]}</p>
          </TextWrapper>
        </Item>
      ))}
    </Container>
  );
}

export default Jumbotron;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  padding-top: 5vh;
  background-color: black;
`;
const ImageWrapper = styled.div`
  display: flex;
  flex: 0.35;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 40px;
  flex: 0.25;

  p {
    padding-top: 20px;
  }
`;

const Item = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction};
  height: 30vh;
  width: 100vw;
  justify-content: center;

  h1,
  p {
    color: white;
  }
`;

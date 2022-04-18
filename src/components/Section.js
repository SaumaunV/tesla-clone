import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

function Section(props) {
  return (
    <Wrapper bgImage={props.backgroundImage}>
      <Fade bottom>
        <ItemText>
          <h1>{props.title}</h1>
          <p>{props.description}</p>
        </ItemText>
      </Fade>
      <Buttons>
        <Fade bottom>
          <ButtonGroup>
            {props.last ? (
              <LeftButtonBlack>{props.leftButtonText}</LeftButtonBlack>
            ) : (
              <LeftButton>{props.leftButtonText}</LeftButton>
            )}
            {props.rightButtonText && (
              <RightButton>{props.rightButtonText}</RightButton>
            )}
          </ButtonGroup>
        </Fade>
        {props.first ? (
          <DownArrow src="/images/down-arrow.svg" />
        ) : (
          <MarginBottom />
        )}
      </Buttons>
    </Wrapper>
  );
}

export default Section;

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: ${(props) => `url("/images/${props.bgImage}")`};
`;

export const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;

  h1 {
    color: black;
    font-size: 40px;
    font-weight: 500;
  }
  p {
    color: black;
    margin-top: 10px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  margin: 8px;
`;

const LeftButtonBlack = styled(LeftButton)`
  background-color: black;
`;

const RightButton = styled(LeftButton)`
  background-color: white;
  opacity: 0.65;
  color: black;
`;

const DownArrow = styled.img`
  height: 40px;
  animation: animateDown infinite 1.5s;
`;

const MarginBottom = styled.div`
  height: 40px;
`;

const Buttons = styled.div``;

import React from "react";
import { Link } from "react-router-dom";
import { Container, Button } from "../../globalStyles";
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img
} from "./Intro.elements";

function IntroSection({
  primary,
  lightBg,
  lightTopLine,
  lightText,
  lightTextDesc,
  img,
  alt,
  imgStart,
  start
}) {
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </InfoColumn>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>
                  Ph.D in Mathamatics, Minor: Fuzzy Graph Theory
                </TopLine>
                <Heading lightText={lightText}>Shanookha Ali</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>
                  here come intro
                </Subtitle>
              </TextWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
}

export default IntroSection;

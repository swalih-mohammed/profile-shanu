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
  Img,
  SectionTitle
} from "./Mooc.elements";

import { data } from "./data"

function InfoSection({
  primary,
  lightBg,
  topLine,
  lightTopLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
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
              <TextWrapper>
                <SectionTitle lightText={lightText}>
                  Book and Book Chapter Published
                </SectionTitle>
                {data?.map((data, key) => {
                  return (
                    <>
                      <TopLine lightTopLine={lightTopLine}>
                        {data.topline}
                      </TopLine>
                      <Heading lightText={lightText}>
                        {data.heading}
                      </Heading>
                      <Subtitle lightTextDesc={lightTextDesc}>
                        {data.Subtitle}
                      </Subtitle>
                    </>)
                })}

              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
}

export default InfoSection;

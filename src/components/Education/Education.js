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
} from "./Education.elements";

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
                <SectionTitle lightText={lightText}>EDUCATION</SectionTitle>

                <TopLine lightTopLine={lightTopLine}>
                  National Institute of Technology Calicut, Calicut, Kerala - 15 Jul 2016 -
                  28 Nov 2020
                </TopLine>
                <Heading lightText={lightText}>
                  Ph.D in Mathematics
                </Heading>
                <Subtitle lightTextDesc={lightTextDesc}>
                  National Institute of Technology Calicut, Calicut, Kerala, Title of the Thesis:
                  Vertex Connectivity Parameters, Paths and Cycles in Fuzzy Graphs
                </Subtitle>

                <TopLine lightTopLine={lightTopLine}>
                  Calicut University Campus, Calicut, Kerala - 16 Jan 2015 -
                  19 Jan 2016
                </TopLine>
                <Heading lightText={lightText}>
                  M.Phil in Mathematics
                </Heading>
                <Subtitle lightTextDesc={lightTextDesc}>
                  Project Title : Zero Divisor
                  Graph of a Ring CGPA: 9/10
                </Subtitle>

                <TopLine lightTopLine={lightTopLine}>
                  Calicut University Campus, Calicut, Kerala - 5 Aug 2012 -
                  18 Jun 2014
                </TopLine>
                <Heading lightText={lightText}>
                  Master in Mathematics
                </Heading>
                <Subtitle lightTextDesc={lightTextDesc}>
                  Project Title: Fractals Theory
                  CGPA: 8.36/10
                </Subtitle>
                <TopLine lightTopLine={lightTopLine}>
                  WMO Arts and Science College, Wayanad, Kerala - 20 Aug 2009-
                  18 May 2012
                </TopLine>
                <Heading lightText={lightText}>
                  Bachlor in Mathematics
                </Heading>
                <Subtitle lightTextDesc={lightTextDesc}>
                  Passed with CGPA: 3.77/4
                </Subtitle>
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

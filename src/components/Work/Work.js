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
} from "./Work.elements";

function IntroSection({
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
                  WORK AND EXPERIENCE
                </SectionTitle>
                <TopLine lightTopLine={lightTopLine}>
                  9 Apr-2021-
                  (Continuing)
                </TopLine>
                <Heading lightText={lightText}>Assistant Professor - Mathematics</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>
                  Humanities and Science Department, CVR College of Engineering, Ibrahimpatinam, Hyderabad, India., Courses Taught: Mathematics for computing, Mathematics II
                </Subtitle>
                <TopLine lightTopLine={lightTopLine}>
                  18 Dec 2020-
                  30 Mar 2021
                </TopLine>
                <Heading lightText={lightText}>Assistant Professor - Mathematics</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>
                  General Department, Govt. Polytechnic College, Meppadi,
                  Wayanad, Kerala, India, Courses Taught: Basic Mathematics (Polytechnic).
                </Subtitle>
                <TopLine lightTopLine={lightTopLine}>
                  1 Sep 2020 -
                  17 Dec 2020
                </TopLine>
                <Heading lightText={lightText}>
                  Assistant Professor - Mathematics,
                </Heading>
                <Subtitle lightTextDesc={lightTextDesc}>
                  Nilgiri College of Arts and Science, Tamil Nadu, India, Courses
                  Taught: Linear Algebra, Abstract Algebra (B. Sc. Mathematics).
                </Subtitle>
                <TopLine lightTopLine={lightTopLine}>
                  30 Nov 2018
                  - 19 Dec 2019
                </TopLine>
                <Heading lightText={lightText}>
                  Senior Research Fellow
                </Heading>
                <Subtitle lightTextDesc={lightTextDesc}>
                  Department of Mathematics, National Institute of Technology Calicut, Calicut,
                  Kerala, India.
                </Subtitle>
                <TopLine lightTopLine={lightTopLine}>
                  15 Jul 2016 -
                  29 Nov 2018
                </TopLine>
                <Heading lightText={lightText}>
                  Junior Research Fellow
                </Heading>
                <Subtitle lightTextDesc={lightTextDesc}>
                  Department of Mathematics, National Institute of Technology Calicut, Calicut,
                  Kerala, India.
                </Subtitle>
                <TopLine lightTopLine={lightTopLine}>
                  1 Jul 2014 -
                  15 jan 2015
                </TopLine>
                <Heading lightText={lightText}>
                  Lecturer
                </Heading>
                <Subtitle lightTextDesc={lightTextDesc}>
                  Nilgiri College of Arts and Science, Tamil Nadu, India, Courses Taught: Real Analysis, Graph
                  Theory (B. Sc. Mathematics) .
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

export default IntroSection;

import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaLink } from "react-icons/fa";

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
  SocialIcons,
  SocialIconLink,
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
                  I am a mathematics teacher passionate about making the world of
                  mathematics accessible and relevant to all students. I have working
                  experience in research and teaching. I have published 3 journal papers.
                  Moreover, I am a author of a books in Fuzzy graph theory, and 2 chapter
                  books. I am currently working as Assistant Professor of mathematics in
                  CVR College of engineering, Hyderabad. My objectives are to excel in
                  my field through hard work, research, skills and perseverance. My
                  medium term objective is to be a leader in fuzzy graph theory and its
                  real time applications, while the long term career goal is to do good
                  mathematics and be of service to humanity.
                </Subtitle>
                <div style={{ display: "flex", flexDirection: "row" }} >
                  <SocialIcons>
                    <SocialIconLink
                      href="https://www.scopus.com/authid/detail.uri?authorId=57203546141"
                      target="_blank"
                      aria-label="FaLink"
                    >
                      <FaLink />
                    </SocialIconLink>
                  </SocialIcons>
                  <SocialIcons>
                    <SocialIconLink
                      href=" https://www.orcid.org/0000-0001-8720-3764"
                      target="_blank"
                      aria-label="FaLink"
                    >
                      <FaLink />
                    </SocialIconLink>
                  </SocialIcons>
                  <SocialIcons>
                    <SocialIconLink
                      href="https://scholar.google.com/citations?user=N1y6JfoAAAAJ&hl=en&oi=ao"
                      target="_blank"
                      aria-label="FaLink"
                    >
                      <FaLink />
                    </SocialIconLink>
                  </SocialIcons>
                  <SocialIcons>
                    <SocialIconLink
                      href="https://www.linkedin.com/in/shanookha-ali"
                      target="_blank"
                      aria-label="LinkedIn"
                    >
                      <FaLinkedin />
                    </SocialIconLink>
                  </SocialIcons>
                </div>
              </TextWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
}

export default IntroSection;

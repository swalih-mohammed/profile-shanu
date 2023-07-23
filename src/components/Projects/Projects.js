import React from "react";
import { Link } from "react-router-dom";
import { ProjectData } from "../../pages/HomePage/Data";
import { Container, Button } from "../../globalStyles";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
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
} from "./Projects.elements";

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
          <TextWrapper>
            <div style={{ justifyContent: "center", display: "flex" }}>
              <SectionTitle lightText={lightText}>PROJECTS</SectionTitle>
            </div>

            {ProjectData.map((data, key) => {
              return (
                <>
                  <div>
                    <TopLine lightTopLine={lightTopLine}>
                      {data.topLine}
                    </TopLine>
                    <Heading lightText={lightText}>{data.heading}</Heading>
                    <Subtitle lightTextDesc={lightTextDesc}>
                      {data.description}
                    </Subtitle>

                    <Subtitle lightTextDesc={lightTextDesc}>
                      Test
                    </Subtitle>
                  </div>
                </>
              );
            })}

          </TextWrapper>
          {/* </InfoRow> */}
        </Container>
      </InfoSec>
    </>
  );
}

export default InfoSection;

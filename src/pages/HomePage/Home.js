import React from "react";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
  homeObjFour,
  homeObjFive
} from "./Data";
import {
  IntroSection,
  WorkSection,
  EducationSection,
  MoocSection,
  ProjectSection
} from "../../components";

function Home() {
  return (
    <>
      <IntroSection {...homeObjOne} />
      <WorkSection {...homeObjTwo} />
      <EducationSection {...homeObjThree} />
      <MoocSection {...homeObjFour} />
      {/* <ProjectSection {...homeObjFive} /> */}
    </>
  );
}

export default Home;

import React, { useContext } from "react";
import Header from "../../core/Header";
import { ProjectHeroView } from "../../core/Project/ProjectHero";
import ProjectTitle from "../../core/Project/ProjectTitle";
import ProjectDescription from "../../core/Project/ProjectDescription";
import Columns from "../../core/Columns";
import SizeContext from "../../utils/SizeContext";
import { StaticProjectImage } from "../../core/Project/ProjectImage";
import heroImage from "../../assets/projectImg/the_voice/hero_the_voice.png";

import TheProblem from "./Sections/TheProblem";
import TheSolution from "./Sections/TheSolution";
import MyRole from "./Sections/MyRole";
import Accessibility from "./Sections/Accessibility";
import Menu from "./Sections/Menu";
import NewScreens from "./Sections/NewScreen";

const ImageComponent = () => (
  <StaticProjectImage
    src={heroImage}
    alt="Laptop and mobile displaying Vita's welcome page."
  />
);

const dataComponent = (template) => () =>
  (
    <Columns
      extraStyle={{
        gridTemplateRows: {
          mobile:
            "auto 30px min-content 30px min-content 15px min-content 15px min-content 15px 1fr",
          tablet:
            "auto 30px min-content 30px min-content 15px min-content 15px min-content 15px 1fr",
          laptop:
            "auto 30px min-content 30px min-content 15px min-content 15px min-content 15px 1fr",
          desktop:
            "auto 30px min-content 30px min-content 15px min-content 15px min-content 15px 1fr",
        }[template],
        gridRowGap: 0,
        gridTemplateColumns: "1fr",
        position: "relative",
        padding: 0,
        height: "fit-content",
        alignSelf: "center",
      }}
    >
      <ProjectTitle>The Voice - Langara</ProjectTitle>
      <ProjectDescription variant="main">
        This project analysed the website forthe Voice, and implemented a PWA.
      </ProjectDescription>
      <ProjectDescription variant="focus">
        Focus: Accessibility, Brand Consistency | System: Multiplatform
      </ProjectDescription>
      <ProjectDescription variant="minor">
        Project done by a team of two developers and one designer (my role).
      </ProjectDescription>
      <ProjectDescription
        variant="minor"
        extraStyle={{ gridRow: "9 / span 1" }}
      >
        Main tools: Figma and Illustrator.
      </ProjectDescription>
    </Columns>
  );

const TheVoice = () => {
  const { template } = useContext(SizeContext);

  return (
    <div>
      <Header keepSmallLogo logoLinksHome />
      <ProjectHeroView
        data={dataComponent(template)}
        image={ImageComponent}
        vCenter
      />
      <TheProblem />
      <TheSolution />
      <MyRole />
      <Accessibility />
      <Menu />
      <NewScreens />
    </div>
  );
};

export default TheVoice;

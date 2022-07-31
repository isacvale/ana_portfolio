import React, { useContext } from "react";
import "../../../node_modules/react-image-lightbox/style.css";
import Header from "../../core/Header";
import ProjectTitle from "../../core/Project/ProjectTitle";
import ProjectDescription from "../../core/Project/ProjectDescription";
import ProjectImage, {
  StaticProjectImage,
} from "../../core/Project/ProjectImage";
import SizeContext from "../../utils/SizeContext";
import heroImage from "../../assets/projectImg/sift/hero_sift.png";
import Columns from "../../core/Columns";

import TheProblem from "./Sections/TheProblem";
import TheSolution from "./Sections/TheSolution";
import MyRole from "./Sections/MyRole";
import Process from "./Sections/Process";

import { ProjectHeroView } from "../../core/Project/ProjectHero";

const ImageComponent = () => (
  <StaticProjectImage
    src={heroImage}
    alt="Two mobile devices depictions pages from Vita."
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
      }}
    >
      <ProjectTitle>Sift</ProjectTitle>
      <ProjectDescription variant="main">
        Sift is an educational waste management mobile application that allows
        users to scan an object with their camera to receive precise information
        on how to recycle it properly.
      </ProjectDescription>
      <ProjectDescription variant="focus">
        Focus: UX, UI | System: iOS/Android
      </ProjectDescription>
      <ProjectDescription variant="minor">
        Project done by a team of three developers and four designers (my role).
      </ProjectDescription>
      <ProjectDescription
        variant="minor"
        extraStyle={{ gridRow: "9 / span 1" }}
      >
        Main tools: Figma, Illustrator, and Photoshop.
      </ProjectDescription>
    </Columns>
  );

const Sift = () => {
  const { template } = useContext(SizeContext);

  return (
    <div>
      <Header keepSmallLogo logoLinksHome currentPage="Sift" />
      <ProjectHeroView data={dataComponent(template)} image={ImageComponent} />
      <TheProblem />
      <TheSolution />
      <MyRole />
      <Process />
    </div>
  );
};

export default Sift;

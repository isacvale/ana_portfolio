import React, { useContext } from "react";
import "../../../node_modules/react-image-lightbox/style.css";
import Header from "../../core/Header";
import ProjectHero from "../../core/Project/ProjectHero";
import ProjectTitle from "../../core/Project/ProjectTitle";
import ProjectDescription from "../../core/Project/ProjectDescription";
import ProjectImage, {
  StaticProjectImage,
} from "../../core/Project/ProjectImage";
import SizeContext from "../../utils/SizeContext";
import { PROJECTS } from "../../constants";
import TheProblem from "./Sections/TheProblem";
import TheSolution from "./Sections/TheSolution";
import MyRole from "./Sections/MyRole";
import Process from "./Sections/Process";
import TheUser from "./Sections/TheUser";
import UserFlow from "./Sections/UserFlow";
import WireframesAndMockups from "./Sections/WireframesAndMockups";
import MoreDetails from "./Sections/MoreDetails";
import Columns from "../../core/Columns";
import { ProjectHeroView } from "../../core/Project/ProjectHero";
import heroImage from "../../assets/projectImg/vita/hero_vita.png";

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
      }}
    >
      <ProjectTitle>Vita</ProjectTitle>
      <ProjectDescription variant="main">
        A data-drive responsive web platform to provide information about
        vitamins and minerals in fruits and vegetables.
      </ProjectDescription>
      <ProjectDescription variant="focus">
        Focus: Responsiveness, UI, UX | System: Multiplatform
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

const Vita = () => {
  const projectData = PROJECTS.find((x) => x.ref === "vita");
  const { template } = useContext(SizeContext);

  return (
    <div>
      <Header keepSmallLogo logoLinksHome />
      <ProjectHeroView data={dataComponent(template)} image={ImageComponent} />
      <TheProblem />
      <TheSolution />
      <MyRole />
      <Process />
      <TheUser />
      <UserFlow />
      <WireframesAndMockups />
      <MoreDetails />
    </div>
  );
};

export default Vita;

import React from "react";
import styled from "styled-components";
import SizeContext from "../../../../utils/SizeContext";
import { PROJECTS } from "../../../../constants";
import ProjectCardSimple from "./ProjectCardSimple";

const StyledSection = styled.section(({ gridArea, template }) => ({
  display: "grid",
  gap: 16,
  gridArea,
  gridTemplateColumns: {
    mobile: "repeat(auto-fill, minmax(240px, 1fr))",
    tablet: "repeat(auto-fill, minmax(240px, 1fr))",
    laptop: "repeat(3, 1fr)",
    desktop: "repeat(3, 1fr)",
  }[template],
  gridTemplateRows: "auto 1fr",
  justifyItems: "center",
  margin: { laptop: "0 auto" }[template] || undefined,
  // maxHeight: { laptop: "calc(100vh - 280px)" }[template] || undefined,
  maxHeight: { laptop: "calc(100vh - 370px)" }[template] || undefined,
  aspectRatio: { laptop: "800 / 528" }[template] || undefined,
}));

const Grid = ({ gridArea }) => {
  const { template } = React.useContext(SizeContext);

  return (
    <StyledSection gridArea={gridArea} template={template}>
      {PROJECTS.map((project) => {
        return <ProjectCardSimple project={project} key={project.ref} />;
      })}
    </StyledSection>
  );
};

export default Grid;

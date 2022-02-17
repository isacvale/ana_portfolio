import React from "react";
import styled from "styled-components";
import { PROJECTS } from "../../../../constants";
import ProjectCardSimple from "./ProjectCardSimple";

const StyledSection = styled.section(({ gridArea }) => ({
  display: "grid",
  gap: 16,
  gridArea,
  gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
  justifyItems: "center",
}));

const Grid = ({ gridArea }) => {
  return (
    <StyledSection gridArea={gridArea}>
      {PROJECTS.map((project) => (
        <ProjectCardSimple project={project} />
      ))}
    </StyledSection>
  );
};

export default Grid;

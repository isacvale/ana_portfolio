import React from "react";
import styled from "styled-components";
import { PROJECTS } from "../../../../constants";
import ProjectCard from "./ProjectCard";

const StyledSection = styled.section(({ gridArea }) => ({
  display: "grid",
  gap: 16,
  gridArea,
  gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
  justifyItems: "center",
}));

const Grid = ({ gridArea }) => {
  return (
    <StyledSection data-ahoy="matheys" gridArea={gridArea}>
      {PROJECTS.map((project) => (
        <ProjectCard project={project} />
      ))}
    </StyledSection>
  );
};

export default Grid;

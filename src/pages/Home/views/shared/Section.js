import React from "react";
import styled from "styled-components";

const StyledSection = styled.section(({ extraStyle }) => ({
  ...extraStyle,
}));

const Section = ({ children, extraStyle }) => {
  return <StyledSection extraStyle={extraStyle}>{children}</StyledSection>;
};

export default Section;

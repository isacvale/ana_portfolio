import React, { useContext } from "react";
import styled from "styled-components";
import SizeContext from "../../../../utils/SizeContext";

const StyledSection = styled.section(({ extraStyle, snapScroller }) => ({
  ...extraStyle,
  minHeight: snapScroller ? "100vh" : undefined,
  position: "relative",
}));

const Section = ({ children, extraStyle, Id }) => {
  const { template } = useContext(SizeContext);
  const snapScroller = ["laptop", "desktop"].includes(template);
  return (
    <StyledSection extraStyle={extraStyle} snapScroller={snapScroller} id={Id}>
      {children}
    </StyledSection>
  );
};

export default Section;

import React, { useContext } from "react";
import styled from "styled-components";
import SizeContext from "../../../../utils/SizeContext";

const StyledSection = styled.section(({ blockTab, extraStyle, snapScroller }) => ({
  ...extraStyle,
  minHeight: snapScroller ? "100vh" : undefined,
  position: "relative",
}));

const Section = ({ blockTab, children, extraStyle, Id }) => {
  const { template } = useContext(SizeContext);
  const snapScroller = ["laptop", "desktop"].includes(template);
  return (
    <StyledSection blockTab={blockTab} extraStyle={extraStyle} snapScroller={snapScroller} id={Id} data-blocktab={blockTab ? "yes" : "no"}>
      {children}
    </StyledSection>
  );
};

export default Section;

import React, { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../utils/theme";
import SizeContext from "../../utils/SizeContext";

const {
  colors: { purple },
} = theme;

const StyledTitle = styled.h2(({ alignSelf, gridArea, template }) => ({
  alignSelf,
  color: purple,
  fontFamily: "Dexa Pro",
  fontSize: { laptop: 36, desktop: 42 }[template] || 30,
  fontWeight: "600",
  gridArea,
  lineHeight: "100%",
  // margin: "0 0 12px",
  margin: 0,
  scrollMarginTop: 96,
}));

const Title = ({ children, ...rest }) => {
  const { template } = useContext(SizeContext);
  return (
    <StyledTitle {...rest} template={template}>
      {children}
    </StyledTitle>
  );
};

export default Title;

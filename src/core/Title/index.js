import React from "react";
import styled from "styled-components";
import { theme } from "../../utils/theme";

const {
  colors: { purple },
} = theme;

const StyledTitle = styled.h2(({ gridArea }) => ({
  color: purple,
  fontFamily: "Dexa Pro",
  fontSize: 30,
  fontWeight: "600",
  gridArea,
  lineHeight: "100%",
  // margin: "0 0 12px",
  margin: 0,
}));

const Title = ({ children, ...rest }) => (
  <StyledTitle {...rest}>{children}</StyledTitle>
);

export default Title;

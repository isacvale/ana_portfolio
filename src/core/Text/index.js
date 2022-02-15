import React from "react";
import styled from "styled-components";

const StyledText = styled.p(({ gridArea }) => ({
  fontSize: 20,
  gridArea,
  margin: "0",
}));

const Text = ({ children, ...rest }) => (
  <StyledText {...rest}>{children}</StyledText>
);

export default Text;

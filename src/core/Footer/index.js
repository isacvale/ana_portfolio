import React from "react";
import styled from "styled-components";
import Columns from "../Columns";
import SocialIcons from "../SocialIcons";
import { MAX_CONTENT_WIDTH, MIN_PADDING } from "../../constants";

const StyledFooter = styled.footer({
  alignItems: "center",
  bottom: 0,
  boxSizing: "border-box",
  display: "flex",
  height: 40,
  left: 0,
  margin: "0 auto",
  maxWidth: MAX_CONTENT_WIDTH,
  padding: `0 ${MIN_PADDING}px`,
  position: "absolute",
  justifyContent: "space-between",
  right: 0,
  width: "100%",
});

const Copyright = styled.span({
  fontFamily: "Dexa Pro",
  fontSize: 12,
  fontWeight: 500,
});

const Footer = () => {
  return (
    <StyledFooter>
      <Copyright>© 2022 - Ana Arado</Copyright>
      <SocialIcons />
    </StyledFooter>
  );
};

export default Footer;

import React from "react";
import styled from "styled-components";
import Section from "../shared/Section";
import { HEADER_HEIGHT } from "../../../../constants";
import DisplaySizes from "../../../../utils/DisplaySizes";
import SocialIcons from "../../../../core/SocialIcons";

const StyledTitle = styled.h1({
  fontFamily: "Dexa Pro",
  fontWeight: 600,
  fontSize: 33,
  lineHeight: "140%",
  margin: 0,
  textAlign: "center",
});

const sectionStyle = {
  justifyContent: "center",
  display: "flex",
  height: `calc(100vh - ${HEADER_HEIGHT}px)`,
  flexDirection: "column",
  position: "relative",
};

const socialIconsExtraStyle = {
  position: "absolute",
  bottom: 30,
  left: 0,
  right: 0,
  margin: "0 auto",
  justifyContent: "center",
};

const Intro = () => (
  <Section extraStyle={sectionStyle}>
    <DisplaySizes />
    <StyledTitle>Hello, my name is Ana.</StyledTitle>
    <StyledTitle>I am a UX/UI designer in Vancouver.</StyledTitle>
    <SocialIcons extraStyle={socialIconsExtraStyle} />
  </Section>
);

export default Intro;

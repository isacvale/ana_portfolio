import React from "react";
import styled from "styled-components";
import Section from "../shared/Section";
import SizeContext from "../../../../utils/SizeContext";
import { HEADER_HEIGHT } from "../../../../constants";
import DisplaySizes from "../../../../utils/DisplaySizes";
import SocialIcons from "../../../../core/SocialIcons";

const StyledTitle = styled.h2(({ template }) => ({
  display: "block",
  fontFamily: "Dexa Pro",
  fontWeight: 600,
  fontSize: 33,
  lineHeight: "140%",
  margin: { tablet: "0 auto 0 calc(50% - 48px)" }[template] || 0,
  maxWidth: { tablet: 240 }[template] || undefined,
  textAlign: { tablet: "left" }[template] || "center",
}));

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

const Intro = () => {
  const { template } = React.useContext(SizeContext);

  return (
    <Section extraStyle={sectionStyle}>
      <DisplaySizes />
      <StyledTitle template={template}>Hello, my name is Ana.</StyledTitle>
      <StyledTitle template={template}>
        I am a UX/UI designer in Vancouver.
      </StyledTitle>
      <SocialIcons extraStyle={socialIconsExtraStyle} />
    </Section>
  );
};

export default Intro;

import React from "react";
import styled from "styled-components";
import Section from "../shared/Section";
import SizeContext from "../../../../utils/SizeContext";
import { HEADER_HEIGHT } from "../../../../constants";
import DisplaySizes from "../../../../utils/DisplaySizes";
import SocialIcons from "../../../../core/SocialIcons";
import Logo from "../../../../core/Logo";
import { LOGO_FULL_LG, LOGO_FULL_SM, LOGO_SM } from "../../../../constants";

const StyledTitle = styled.h2(({ template }) => ({
  display: "block",
  fontFamily: "Dexa Pro",
  fontWeight: 600,
  fontSize: 33,
  lineHeight: "140%",
  margin:
    {
      mobile: "0 auto",
      tablet: "0 auto",
      laptop: "0 0 0 50%",
      desktop: "0 0 0 50%",
    }[template] || 0,
  maxWidth:
    { mobile: "80%", tablet: "74%", laptop: "40%", desktop: "40%" }[template] ||
    undefined,
  textAlign: { laptop: "left", desktop: "left" }[template] || "center",
}));

const sectionStyle = {
  justifyContent: "center",
  display: "flex",
  height: "100vh",
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

const logoExtraStyle = {
  laptop: {
    position: "absolute",
    right: "60%",
    width: "30%",
    maxWidth: 280,
    top: "50%",
    transform: "translateY(-60%)",
  },
  desktop: {
    position: "absolute",
    right: "60%",
    width: "30%",
    maxWidth: 280,
    top: "50%",
    transform: "translateY(-60%)",
  },
};

const Intro = () => {
  const { template } = React.useContext(SizeContext);

  const isLarge = ["laptop", "desktop"].includes(template);

  return (
    <Section extraStyle={sectionStyle} Id="view_intro">
      <DisplaySizes />
      {isLarge && (
        <Logo logo={LOGO_FULL_LG} extraStyle={logoExtraStyle[template]} />
      )}
      <StyledTitle template={template}>Hello, my name is&nbsp;Ana.</StyledTitle>
      <StyledTitle template={template}>
        I am a UX/UI designer in Vancouver.
      </StyledTitle>
      <SocialIcons extraStyle={socialIconsExtraStyle} />
    </Section>
  );
};

export default Intro;

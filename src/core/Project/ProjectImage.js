import React, { useContext } from "react";
import styled from "styled-components";
import SizeContext from "../../utils/SizeContext";

const StyledImg = styled.img(({ imageSize, isSmallScreen }) => ({
  display: "block",
  // maxWidth: isSmallScreen ? "80vw" : "50vw",
  maxWidth: imageSize.x,
  position: "absolute",
  right: 0,
  left: isSmallScreen ? 0 : undefined,
  top: isSmallScreen ? 0 : "50%",
  transform: isSmallScreen ? undefined : "translateY(-50%)",
  margin: "0 auto",
  marginTop: isSmallScreen ? "15vh" : 0,
}));

const ProjectImage = ({ alt, projectData }) => {
  const { template } = useContext(SizeContext);
  const isSmallScreen = ["mobile", "tablet"].includes(template);
  const imageSize = {
    mobile: { x: "80vw", y: 0 },
    tablet: { x: "70vw", y: 0 },
    laptop: { x: "calc(150px + 40vw)", y: 0 },
    desktop: { x: "720px", y: 0 },
  }[template];
  return (
    <StyledImg
      alt={alt}
      imageSize={imageSize}
      isSmallScreen={isSmallScreen}
      src={"/hero_vita.png"}
    />
  );
};

const StaticStyledImg = styled.img(({ imageSize, isSmallScreen }) => ({
  display: "block",
  width: "100%",
}));

export const StaticProjectImage = ({ alt, src }) => {
  return <StaticStyledImg alt={alt} src={src} />;
};

export default ProjectImage;

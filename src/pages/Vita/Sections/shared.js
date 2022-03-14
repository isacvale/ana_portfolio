import React from "react";
import styled from "styled-components";
import Image from "../../../core/Image";

import vita_results from "../../../assets/projectImg/vita/vita_results.png";
import vita_user_flow from "../../../assets/projectImg/vita/vita_user_flow.png";
import vita_wireframes from "../../../assets/projectImg/vita/vita_wireframes.png";

export const SectionText = styled.div({
  gridColumn: "4 / -1",
});

export const VitaImages = ({ currentImage }) => {
  const imageList = [
    { src: vita_user_flow, alt: "text" },
    { src: vita_wireframes, alt: "text" },
    { src: vita_results, alt: "text" },
  ];
  return <Image imageList={imageList} currentImage={currentImage} />;
};

export const ImageWrapper = styled.div({
  gridColumn: "1 / -1",
  marginBottom: 24,
  marginTop: 24,
});

import React from "react";
import styled from "styled-components";
import Image from "../../../core/Image";

import Paragraph from "../../../core/Paragraph";

import the_voice_accessibility from "../../../assets/projectImg/the_voice/the_voice_accessibility.png";
import the_voice_menu_old from "../../../assets/projectImg/the_voice/the_voice_menu_old.png";
import the_voice_menu_new from "../../../assets/projectImg/the_voice/the_voice_menu_new.png";

const labels = [
  "Original Menu",
  "Proposed Menu",
  "Not connected screen",
  "How to install screen",
];

export const SectionText = styled.div({
  gridColumn: "4 / -1",
});

export const TheVoiceImages = ({ currentImage }) => {
  const imageList = [
    { src: the_voice_accessibility, alt: labels[0] },
    { src: the_voice_menu_old, alt: labels[1] },
    { src: the_voice_menu_new, alt: labels[2] },
  ];
  return (
    <Image
      imageList={imageList}
      currentImage={currentImage}
      caption={labels[currentImage]}
    />
  );
};

// const ThinImage = (imageNum) => {
//   return (
//     <label>
//       <img />
//       <Paragraph>{labels[imageNum]}</Paragraph>
//     </label>
//   );
// };

export const ImageWrapperFull = styled.div({
  gridColumn: "1 / -1",
  marginBottom: 24,
  marginTop: 24,
});

export const ImageWrapperThin = styled.div({
  gridColumn: "6 / 11",
  marginBottom: 24,
  marginTop: 24,
  display: "flex",
  gap: 16,
});

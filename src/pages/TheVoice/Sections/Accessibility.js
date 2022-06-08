import React from "react";
import SectionGrid from "../../../core/Project/SectionGrid";
import SectionTitle from "../../../core/Project/SectionTitle";
import SectionText from "../../../core/Project/SectionText";
import Paragraph from "../../../core/Paragraph";
import { ImageWrapperFull, TheVoiceImages } from "./shared"

const Accessibility = () => (
  <SectionGrid>
    <SectionTitle>Accessibility</SectionTitle>
    <SectionText>
      <Paragraph>
        The main changes in accessibility on the website were linked to colour
        contrast and tab navigation. Some elements were not clickable through
        tab navigation and others were not highlighted when focussed, making it
        hard for a user to know they could be accessed. The WAVE Web
        Accessibility Evaluation Tool was used as a reference but the updates
        went beyond its recommendations.
      </Paragraph>
    </SectionText>    
    <ImageWrapperFull>
      <TheVoiceImages currentImage={0} />
    </ImageWrapperFull>
  </SectionGrid>
);

export default Accessibility;

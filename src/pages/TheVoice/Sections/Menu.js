import React from "react";
import SectionGrid from "../../../core/Project/SectionGrid";
import SectionTitle from "../../../core/Project/SectionTitle";
import SectionText from "../../../core/Project/SectionText";
import Paragraph from "../../../core/Paragraph";
import { ImageWrapperThin, TheVoiceImages } from "./shared";

const Menu = () => (
  <SectionGrid>
    <SectionTitle>Menu</SectionTitle>
    <SectionText>
      <Paragraph>
        The menu for smaller screens also had not been updated from the original
        WordPress theme and had different colours, links that did not work, and
        the possibility to Sign in that should not be open to visitors. The
        proposed version had the logo in the place of the previous Sign in
        option, consistent typeface, colours, and links to the social media they
        use.
      </Paragraph>
      <ImageWrapperThin>
        <TheVoiceImages currentImage={1} label="1" />
        <TheVoiceImages currentImage={2} label="2" />
      </ImageWrapperThin>
    </SectionText>
  </SectionGrid>
);

export default Menu;

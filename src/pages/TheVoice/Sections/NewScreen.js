import React from "react";
import SectionGrid from "../../../core/Project/SectionGrid";
import SectionTitle from "../../../core/Project/SectionTitle";
import SectionText from "../../../core/Project/SectionText";
import Paragraph from "../../../core/Paragraph";

const NewScreens = () => (
  <SectionGrid>
    <SectionTitle>New Screens</SectionTitle>
    <SectionText>
      <Paragraph>
        Since the website was adapted into a PWA, we needed two more screens.
        The not connected screen for when users tried to access new content
        without having internet access, and how to install to help guide users
        that did not see or read the card on the home screen.
      </Paragraph>
    </SectionText>
  </SectionGrid>
);

export default NewScreens;

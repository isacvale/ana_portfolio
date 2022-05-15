import React from "react";
import SectionGrid from "../../../core/Project/SectionGrid";
import SectionTitle from "../../../core/Project/SectionTitle";
import SectionText from "../../../core/Project/SectionText";
import Paragraph from "../../../core/Paragraph";

const MyRole = () => (
  <SectionGrid>
    <SectionTitle>My role</SectionTitle>
    <SectionText>
      <Paragraph>
        In this project, I analyzed the current website finding the issues
        needing improving and how to solve them, and designed pages needed to
        guide the user in the PWA. After the changes were implemented, I worked
        with Quality Assurance for this project alongside developers.
      </Paragraph>
      <Paragraph>
        I also presented the proposed changes to stakeholders before and after
        development.
      </Paragraph>
    </SectionText>
  </SectionGrid>
);

export default MyRole;

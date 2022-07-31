import React from "react";
import SectionGrid from "../../../core/Project/SectionGrid";
import SectionTitle from "../../../core/Project/SectionTitle";
import SectionText from "../../../core/Project/SectionText";
import Paragraph from "../../../core/Paragraph";

const TheProblem = () => (
  <SectionGrid>
    <SectionTitle>The problem</SectionTitle>
    <SectionText>
      <Paragraph>
        Many people experience difficulty in knowing how to recycle items
        correctly, and do not have time to do proper research.
      </Paragraph>
      <Paragraph>
        Recycling rules are different in different places depending on what
        recycling facilities are around, what kind of materials these facilities
        are able to recycle, and what are the local conventions when dealing
        with waste.
      </Paragraph>
      <Paragraph>
        Even if we have a local source of information, that source usually
        relies on your ability to properly identify the materials of your waste.
      </Paragraph>
    </SectionText>
  </SectionGrid>
);

export default TheProblem;

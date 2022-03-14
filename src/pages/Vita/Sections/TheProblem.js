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
        Vitamins and minerals are important for our health, but which vitamins
        and minerals exactly and how much of them are needed is not easy to
        discover.
      </Paragraph>
      <Paragraph>
        It is also difficult to know which natural food sources have the
        nutrients a person specifically needs in their diet, and, relying too
        much on supplements can not only be expensive, but can lead to problems
        related to vitamin overdose.
      </Paragraph>
    </SectionText>
  </SectionGrid>
);

export default TheProblem;

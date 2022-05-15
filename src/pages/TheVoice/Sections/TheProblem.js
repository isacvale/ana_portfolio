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
        The Langara Voice, Langara College’s newspaper and news website, wanted
        to benefit from the advantages of a PWA, such as offline accessibility,
        and faster loading. The website needed to adapt the interface to allow
        for it, and inform the users how to better take advantage of the
        feature.
      </Paragraph>
      <Paragraph>
        The journalism department said they did not want us to make major
        changes to the interface since they were happy with it.
      </Paragraph>
    </SectionText>
  </SectionGrid>
);

export default TheProblem;

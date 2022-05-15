import React from "react";
import SectionGrid from "../../../core/Project/SectionGrid";
import SectionTitle from "../../../core/Project/SectionTitle";
import SectionText from "../../../core/Project/SectionText";
import Paragraph from "../../../core/Paragraph";

const TheSolution = () => (
  <SectionGrid>
    <SectionTitle>The solution</SectionTitle>
    <SectionText>
      <Paragraph>
        A Get App button was introduced to the navbar and menu, and a card to
        notify users of the functionality. A page explaining how to install the
        PWA was also designed and many small issues in the UI were diagnosed and
        fixed. Those issues were mainly linked to enhancing brand consistency
        and improving accessibility.
      </Paragraph>
    </SectionText>
  </SectionGrid>
);

export default TheSolution;

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
        Sift helps users make informed recycling decisions through locating
        convenient recycling centres, filtering search functions, and allowing
        for further education with an object scanning and depositing feature.
        Users can take a picture of any object and Sift will tell them which
        bins to use, or if it needs to be taken to a recycling facility. That is
        done using Artificial Intelligence trained to recognize different
        materials and identify which ones can be recycled.
      </Paragraph>
    </SectionText>
  </SectionGrid>
);

export default TheSolution;

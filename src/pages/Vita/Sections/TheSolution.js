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
        This project is about nutrition. We gathered data from the U.S.
        Department of Agriculture and used it to create a nutrient calculator
        that can analyze user-provided data, and give advice on which vitamins
        and minerals they should consume. We complemented these results with
        information on how much of those vitamins and minerals could be found in
        fruits and vegetables.
      </Paragraph>
    </SectionText>
  </SectionGrid>
);

export default TheSolution;

import React from "react";
import SectionGrid from "../../../core/Project/SectionGrid";
import SectionTitle from "../../../core/Project/SectionTitle";
import SectionText from "../../../core/Project/SectionText";
import Paragraph from "../../../core/Paragraph";
import { ImageWrapper, VitaImages } from "./shared";

const WireframesAndMockups = () => (
  <SectionGrid>
    <SectionTitle>Wireframes and mockups</SectionTitle>
    <SectionText>
      <Paragraph>
        From user flow to wireframes and mockups we can see some changes. Here,
        to exemplify this, you can find some examples of decisions made based on
        feedback at different times for the Nutrient Calculator.
      </Paragraph>
    </SectionText>
    <SectionText>
      <Paragraph>
        One of the first ideas was to have the form for the nutrient calculator
        slide from the right. After the user inputs the data, it would slide
        back to outside the page and the results would be available.
      </Paragraph>
      <Paragraph>
        From feedback, we found out that left us with a confusing results page
        and we adapted the design to separate the form from the results.
      </Paragraph>
    </SectionText>
    <ImageWrapper>
      <VitaImages currentImage={1} />
    </ImageWrapper>
    <SectionText>
      <Paragraph>More changes were made until the mockup.</Paragraph>
      <Paragraph>
        With access to real content, we realized the charts for vitamins and
        minerals should be separated to facilitate their understanding. Icons
        were created for health concerns, and calls to action were placed to
        encourage the user to update their results considering those concerns.
      </Paragraph>
      <Paragraph>
        Before this iteration, it was expected the chart would change in
        real-time but, since the concerns were not too close to the chart on the
        screen, we were having problems with the perception of the results
        changing. We could make the page scroll the user to the results but we
        would have to know when the user was done selecting all the elements
        needed.
      </Paragraph>
      <Paragraph>
        With the ”Update Results” button, we were able to direct the user to the
        results and implement an animation of the charts updating to reinforce
        its perception at the right time.
      </Paragraph>
    </SectionText>
    <ImageWrapper>
      <VitaImages currentImage={2} />
    </ImageWrapper>
  </SectionGrid>
);

export default WireframesAndMockups;

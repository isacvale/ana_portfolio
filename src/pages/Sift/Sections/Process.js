import React, { useContext } from "react";
import styled from "styled-components";
import SizeContext from "../../../utils/SizeContext";
import SectionGrid from "../../../core/Project/SectionGrid";
import SectionTitle from "../../../core/Project/SectionTitle";
import SectionText from "../../../core/Project/SectionText";
import Paragraph from "../../../core/Paragraph";
import vita_process from "../../../assets/projectImg/vita/vita_process.png";
import vita_process_small from "../../../assets/projectImg/vita/vita_process_small.png";

const StaticImg = styled.img(({ template }) => ({
  width: "100%",
  marginTop: 58,
  gridColumn: {
    mobile: "2 / -2",
    tablet: "4 / -1",
    laptop: "5 / 12",
    desktop: "5 / 12",
  }[template],
}));

const Process = () => {
  const { template } = useContext(SizeContext);

  return (
    <>
      <SectionGrid>
        <SectionTitle>Process</SectionTitle>
        <SectionText>
          <Paragraph>
            Working with three other designers, we shared responsibilities,
            reviewed designs as a group. Giving and receiving feedback was key
            throughout the entire process.
          </Paragraph>
        </SectionText>
        <StaticImg
          template={template}
          src={template === "mobile" ? vita_process_small : vita_process}
          alt="A chart depicting two loops. The first goes: research, ideate, sketch, feedback. The second goes: feedback, review, refine."
        />
      </SectionGrid>
      <SectionGrid>
        <SectionTitle small>Research</SectionTitle>
        <SectionText>
          <Paragraph>
            To find out if our first idea was viable, how it could be executed,
            user's pain points and goals on the subject, who our competitors
            were, and how to differentiate our website from theirs. Research is
            also performed at any time that something needs more context or a
            better understanding.
          </Paragraph>
        </SectionText>
      </SectionGrid>
      <SectionGrid>
        <SectionTitle small>Ideate</SectionTitle>
        <SectionText>
          <Paragraph>
            Based on the research results, define the scope of the MVP,
            brainstorm features, and select what should be implemented first and
            what could be a good choice for future versions.
          </Paragraph>
        </SectionText>
      </SectionGrid>
      <SectionGrid>
        <SectionTitle small>Sketch</SectionTitle>
        <SectionText>
          <Paragraph>
            Start designing the application. User flow, lo-fidelity wireframes.
          </Paragraph>
        </SectionText>
      </SectionGrid>
      <SectionGrid>
        <SectionTitle small>Feedback</SectionTitle>
        <SectionText>
          <Paragraph>
            Here we test our design. Starting from other designers, developers,
            users, stakeholders, etc. This step is crucial to guide how the
            design unfolds.
          </Paragraph>
        </SectionText>
      </SectionGrid>
      <SectionGrid>
        <SectionTitle small>Review</SectionTitle>
        <SectionText>
          <Paragraph>
            Analyze the results from the feedback and generate the guidelines to
            go forward. To keep the website consistent, this is done with the
            designers working on the same project, as a group.
          </Paragraph>
        </SectionText>
      </SectionGrid>
      <SectionGrid>
        <SectionTitle small>Refine</SectionTitle>
        <SectionText>
          <Paragraph>
            Adapt the design according to guidelines and advance it to the next
            stage, adding elements to the design until it is time to test and
            adapt again. Developers are part of the feedback and have access to
            the design at every step.
          </Paragraph>
        </SectionText>
      </SectionGrid>
    </>
  );
};

export default Process;

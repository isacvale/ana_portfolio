import React from "react";
import styled from "styled-components";
import Section from "../shared/Section";
import SizeContext from "../../../../utils/SizeContext";
import Title from "../../../../core/Title";
import Text from "../../../../core/Text";
import Button from "../../../../core/Button";
import Columns from "../../../../core/Columns";

const StyledText = styled(Text)(({ template }) => ({
  maxWidth: { tablet: "75%" }[template] || undefined,
}));

const smallExtraStyle = {
  gridTemplateRows: "max-content 28px max-content 37px max-content 43px",
  gridTemplateAreas: "'title' '.' 'text' '.' 'button'",
};
const columnsExtraStyle = {
  mobile: smallExtraStyle,
  tablet: smallExtraStyle,
  laptop: {
    gridTemplateColumns: "1fr 2fr",
    gridTemplateRows: "40vh auto 42px auto",
    gridTemplateAreas: `
      "title ."
      ". ."
      "text button"
      `,
  },
  desktop: {
    gridTemplateColumns: "1fr 2fr",
    gridTemplateRows: "40vh 42px auto",
    gridTemplateAreas: `
      "title ."
      ". ."
      "text button"
      `,
  },
};

const Resume = () => {
  const { template } = React.useContext(SizeContext);

  return (
    <Section>
      <Columns columns="1fr" extraStyle={columnsExtraStyle[template]} gap={0}>
        <Title gridArea="title" alignSelf="end" id="view_resume">
          Resumé
        </Title>
        <StyledText gridArea="text" template={template}>
          Please feel free to view and download a copy of my&nbsp;resumé.
        </StyledText>
        <Button gridArea="button" pdf="pdf/resume.pdf" margin="0 auto">
          Download Resumé
        </Button>
      </Columns>
    </Section>
  );
};

export default Resume;

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

const columnsExtraStyle = {
  gridTemplateRows: "max-content 28px max-content 37px max-content 43px",
  gridTemplateAreas: "'title' '.' 'text' '.' 'button'",
};

const Resume = () => {
  const { template } = React.useContext(SizeContext);

  return (
    <Section>
      <Columns columns="1fr" extraStyle={columnsExtraStyle} gap={0}>
        <Title gridArea="title">Resumé</Title>
        <StyledText gridArea="text" template={template}>
          Please feel free to view and download a copy of my&nbsp;resumé.
        </StyledText>
        <Button gridArea="button" pdf="pdf/resume.pdf" margin="0 auto">
          Download resumé
        </Button>
      </Columns>
    </Section>
  );
};

export default Resume;

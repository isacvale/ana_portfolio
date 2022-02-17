import React from "react";
import styled from "styled-components";
import Section from "../shared/Section";
import SizeContext from "../../../../utils/SizeContext";
import Title from "../../../../core/Title";
import Text from "../../../../core/Text";
import Grid from "./Grid";
import Columns from "../../../../core/Columns";

const columnsExtraStyle = {
  gridTemplateRows: "max-content 28px max-content 108px max-content 100px",
  gridTemplateAreas: "'title' '.' 'text' '.' 'cards'",
};

const StyledText = styled(Text)(({ template }) => ({
  maxWidth: { tablet: "75%" }[template] || undefined,
}));

const Portfolio = () => {
  const { template } = React.useContext(SizeContext);

  return (
    <Section>
      <Columns columns="1fr" extraStyle={columnsExtraStyle} gap={0}>
        <Title gridArea="title">Portfolio</Title>
        <StyledText gridArea="text" template={template}>
          Here you can find examples of redesign proposals for existing
          websites, solo projects as well of group projects.
        </StyledText>
        <Grid gridArea="cards" />
      </Columns>
    </Section>
  );
};

export default Portfolio;

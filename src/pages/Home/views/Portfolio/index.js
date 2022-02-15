import React from "react";
import Section from "../shared/Section";
import Title from "../../../../core/Title";
import Text from "../../../../core/Text";
import Grid from "./Grid";
import Columns from "../../../../core/Columns";

const columnsExtraStyle = {
  gridTemplateRows: "max-content 28px max-content 108px max-content 100px",
  gridTemplateAreas: "'title' '.' 'text' '.' 'cards'",
};

const Portfolio = () => {
  return (
    <Section>
      <Columns columns="1fr" extraStyle={columnsExtraStyle} gap={0}>
        <Title gridArea="title">Portfolio</Title>
        <Text gridArea="text">
          Here you can find examples of redesign proposals for existing
          websites, solo projects as well of group projects.
        </Text>
        <Grid gridArea="cards" />
      </Columns>
    </Section>
  );
};

export default Portfolio;

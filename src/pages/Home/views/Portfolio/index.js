import React from "react";
import styled from "styled-components";
import Section from "../shared/Section";
import SizeContext from "../../../../utils/SizeContext";
import Title from "../../../../core/Title";
import Text from "../../../../core/Text";
import Grid from "./Grid";
import Columns from "../../../../core/Columns";

const smallScreenExtraStyle = {
  gridTemplateRows: "max-content 28px max-content 108px max-content 100px",
  gridTemplateAreas: "'title' '.' 'text' '.' 'cards'",
};

const columnsExtraStyle = {
  mobile: smallScreenExtraStyle,
  tablet: smallScreenExtraStyle,
  laptop: {
    gridTemplateRows: "20vh auto 24px auto 24px 1fr 24px",
    gridTemplateColumns: "1fr",
    gridTemplateAreas: "'.' 'title' '.' 'text' '.' 'cards' '.'",
  },
  desktop: {
    gridTemplateRows: "25vh auto 24px 1fr 64px",
    gridTemplateColumns: "1fr 36px 2fr",
    gridTemplateAreas:
      "'. . .' 'title title title' '. . .' 'text . cards' '. . .'",
  },
};

const StyledText = styled(Text)(({ template }) => ({
  maxWidth: { tablet: "75%", laptop: "60%" }[template] || undefined,
  // fontSize: { laptop: 22, desktop: 30 }[template] || undefined,
}));

const Portfolio = () => {
  const { template } = React.useContext(SizeContext);

  return (
    <Section id="#portfolio">
      <Columns columns="1fr" extraStyle={columnsExtraStyle[template]} gap={0}>
        <Title gridArea="title" id="view_portfolio">
          Portfolio
        </Title>
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

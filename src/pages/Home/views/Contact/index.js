import React from "react";
import styled from "styled-components";
import Section from "../shared/Section";
import SizeContext from "../../../../utils/SizeContext";

import Title from "../../../../core/Title";
import Text from "../../../../core/Text";
import Anchor from "../../../../core/Anchor";
import Columns from "../../../../core/Columns";
import Form from "./Form";
import Footer from "../../../../core/Footer";

const StyledText = styled(Text)(({ template }) => ({
  maxWidth: { tablet: "75%" }[template] || undefined,
}));

const smallExtraStyle = {
  gridTemplateRows: "max-content 28px max-content 26px max-content 66px",
  gridTemplateAreas: "'title' '.' 'text' '.' 'form'",
};

const columnsExtraStyle = {
  mobile: smallExtraStyle,
  tablet: smallExtraStyle,
  laptop: {
    gridTemplateColumns: "3fr 1fr 8fr",
    gridTemplateRows: "20vh 28px auto",
    gridTemplateAreas: `
      "title . ."
      ". . ."
      "text . form"
      `,
  },
  desktop: {
    gridTemplateColumns: "3fr 1fr 8fr",
    gridTemplateRows: "25vh 28px auto",
    gridTemplateAreas: `
      "title . ."
      ". . ."
      "text . form"
      `,
  },
};

const Contact = () => {
  const { template } = React.useContext(SizeContext);

  return (
    <Section>
      <Columns columns="1fr" extraStyle={columnsExtraStyle[template]} gap={0}>
        <Title gridArea="title" alignSelf="end" id="view_contact">
          Contact
        </Title>
        <StyledText gridArea="text" template={template}>
          You can reach me through social media, this contact form, or sending
          an email to <Anchor href="">me@anaarado.com</Anchor>.
        </StyledText>
        <Form gridArea="form" />
      </Columns>
      <Footer />
    </Section>
  );
};

export default Contact;

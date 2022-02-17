import React from "react";
import styled from "styled-components";
import Section from "../shared/Section";
import SizeContext from "../../../../utils/SizeContext";

import Title from "../../../../core/Title";
import Text from "../../../../core/Text";
import Anchor from "../../../../core/Anchor";
import Columns from "../../../../core/Columns";
import Form from "./Form";

const StyledText = styled(Text)(({ template }) => ({
  maxWidth: { tablet: "75%" }[template] || undefined,
}));

const columnsExtraStyle = {
  gridTemplateRows: "max-content 28px max-content 26px max-content 66px",
  gridTemplateAreas: "'title' '.' 'text' '.' 'form'",
};

const Contact = () => {
  const { template } = React.useContext(SizeContext);

  return (
    <Section>
      <Columns columns="1fr" extraStyle={columnsExtraStyle} gap={0}>
        <Title gridArea="title">Contact</Title>
        <StyledText gridArea="text" template={template}>
          You can reach me through social media, this contact form, or sending
          an email to <Anchor href="">me@anaarado.com</Anchor>.
        </StyledText>
        <Form gridArea="form" />
      </Columns>
    </Section>
  );
};

export default Contact;

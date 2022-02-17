import React from "react";
import styled from "styled-components";
import Section from "../shared/Section";
import Title from "../../../../core/Title";
import Text from "../../../../core/Text";
import Columns from "../../../../core/Columns";
import Form from "./Form";

const columnsExtraStyle = {
  gridTemplateRows: "max-content 28px max-content 26px max-content 66px",
  gridTemplateAreas: "'title' '.' 'text' '.' 'form'",
};

const Contact = () => {
  return (
    <Section>
      <Columns columns="1fr" extraStyle={columnsExtraStyle} gap={0}>
        <Title gridArea="title">Contact</Title>
        <Text gridArea="text">
          You can reach me through social media, this contact form, or sending
          an email to me@anaarado.com
        </Text>
        <Form gridArea="form" />
      </Columns>
    </Section>
  );
};

export default Contact;
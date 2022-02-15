import React from "react";
import styled from "styled-components";
import Input from "./Input";
import Button from "../../../../core/Button";

const StyledForm = styled.form(({ gridArea }) => ({
  gridArea,
}));

const Form = ({ gridArea }) => (
  <StyledForm
    gridArea={gridArea}
    name="portfolio-contact"
    data-netlify="true"
    method="POST"
  >
    <Input
      id="e-mail"
      label="Please enter your email address"
      labelWithValue="Email"
    />
    <Input
      id="subject"
      label="Please enter the subject"
      labelWithValue="Subject"
    />
    <Input
      id="message"
      label="Please write the message"
      labelWithValue="Message"
      textArea
    />
    <Button
      submit={{
        value: "Send Message",
      }}
      margin="28px auto 0"
    />
  </StyledForm>
);

export default Form;

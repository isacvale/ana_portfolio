import React from "react";
import styled from "styled-components";
import Input from "./Input";
import Button from "../../../../core/Button";

const StyledForm = styled.form(({ gridArea }) => ({
  gridArea,
  margin: "-20px auto 0",
  maxWidth: 680,
  width: "100%",
}));

const Form = ({ blockTab, gridArea }) => (
  <StyledForm
    gridArea={gridArea}
    name="portfolio-contact"
    data-netlify="true"
    method="POST"
  >
    <input type="hidden" name="form-name" value="portfolio-contact" />
    <Input
      id="e-mail"
      name="email"
      label="Please enter your email address"
      labelWithValue="Email"
      tabIndex={blockTab ? -1 : 0}
      disabled={blockTab}
    />
    <Input
      id="subject"
      name="subject"
      label="Please enter the subject"
      labelWithValue="Subject"
      tabIndex={blockTab ? -1 : 0}
      disabled={blockTab}
    />
    <Input
      id="message"
      name="message"
      label="Please write the message"
      labelWithValue="Message"
      textArea
      tabIndex={blockTab ? -1 : 0}
      disabled={blockTab}
    />
    <Button
      submit={{
        value: "Send Message",
      }}
      margin="28px auto 0"
      blockTab={blockTab}
      disabled={blockTab}
    />
  </StyledForm>
);

export default Form;

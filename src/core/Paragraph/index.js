import React from "react";
import styled from "styled-components";

const Paragraph = styled.p({
  fontSize: 24,
  fontFamily: "Dexa Pro",
  lineHeight: "130%",
  margin: "0 0 32px",
  "&:last-child": {
    margin: 0,
  },
});

export default Paragraph;

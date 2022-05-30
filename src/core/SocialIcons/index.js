import React from "react";
import styled from "styled-components";
import { SOCIAL_LINKS } from "../../constants";
import Button from "./Button";

const StyledAside = styled.aside(({ extraStyle = {} }) => ({
  display: "flex",
  gap: 10,
  ...extraStyle,
}));

const SocialIcons = ({ blockTab, extraStyle }) => (
  <StyledAside extraStyle={extraStyle}>
    {SOCIAL_LINKS.map((link) => (
      <Button key={link.name} link={link} blockTab={blockTab} />
    ))}
  </StyledAside>
);

export default SocialIcons;

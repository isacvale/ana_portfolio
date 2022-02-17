import React from "react";
import styled from "styled-components";
import { theme } from "../../utils/theme";
import { Link } from "react-router-dom";

const variantStyle = {
  default: {},
  panel: {
    fontFamily: "Dexa Pro",
    fontSize: 30,
    fontWeight: 600,
    height: 45,
    paddingTop: 0,
    marginTop: 15,
    width: "fit-content",
  },
};

const StyledLink = styled(Link)(
  ({ isactive }) => ({
    borderBottom: `5px solid ${
      isactive ? theme.colors.dark : theme.colors.transparent
    }`,
    boxSizing: "border-box",
    color: theme.colors.dark,
    fontSize: 24,
    fontWeight: 500,
    height: "100%",
    padding: "0 8px",
    paddingTop: 30,
    textDecoration: "none",
  }),
  ({ variant }) => variantStyle[variant]
);

const NavigationLink = ({
  isActive,
  label = "link",
  path,
  variant = "default",
}) => (
  <StyledLink isactive={isActive} variant={variant} to={path}>
    {label}
  </StyledLink>
);

export default NavigationLink;

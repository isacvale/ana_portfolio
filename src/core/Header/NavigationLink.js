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
      isactive === "true" ? theme.colors.dark : theme.colors.transparent
    }`,
    boxSizing: "border-box",
    color: theme.colors.dark,
    cursor: "pointer",

    fontFamily: "Dexa Pro",
    fontSize: 24,
    fontWeight: 600,
    height: "100%",
    padding: "0 8px",
    paddingTop: 30,
    textDecoration: "none",
    "&:hover": {
      borderBottom: `5px solid ${
        isactive === "true" ? theme.colors.purple : theme.colors.transparent
      }`,
      color: theme.colors.purple,
    },
  }),
  ({ variant }) => variantStyle[variant]
);

const StyledButton = styled.button(
  ({ isactive }) => ({
    background: "transparent",
    border: "none",
    borderBottom: `5px solid ${
      isactive === "true" ? theme.colors.dark : theme.colors.transparent
    }`,
    boxSizing: "border-box",
    color: theme.colors.dark,
    cursor: "pointer",
    fontFamily: "Dexa Pro",
    fontSize: 24,
    fontWeight: 600,
    height: "100%",
    padding: "0 8px",
    paddingTop: 30,
    textDecoration: "none",
    flex: 0,
    "&:hover": {
      borderBottom: `5px solid ${
        isactive === "true" ? theme.colors.purple : theme.colors.transparent
      }`,
      color: theme.colors.purple,
    },
  }),
  ({ variant }) => variantStyle[variant]
);

const NavigationLink = ({
  isActive,
  label = "link",
  path,
  variant = "default",
  homePage,
  moveToIdx,
  index,
  clickCallback,
}) => {
  const handleClick = (ev) => {
    if (clickCallback) clickCallback(ev);
    else moveToIdx.current(index);
  };

  if (homePage)
    return (
      <StyledButton onClick={handleClick} isactive={String(!!isActive)}>
        {label}
      </StyledButton>
    );

  const to = path.replace("/", "/#");

  return (
    <StyledLink isactive={String(!!isActive)} variant={variant} to={to}>
      {label}
    </StyledLink>
  );
};

export default NavigationLink;

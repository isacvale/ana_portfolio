import React from "react";
import styled from "styled-components";
import shadows from "../../utils/shadows";
// import { highlightCSS } from "../../utils/highlight";
import { theme } from "../../utils/theme";
import useHighlight from "../../hooks/useHighlight";
import highlight from "../../utils/highlight";

const { colors } = theme;

const commonStyle = {
  ...shadows(),
  alignItems: "center",
  color: "white",
  display: "flex",
  fontFamily: "Dexa Pro",
  fontWeight: 500,
  height: 50,
  padding: "0 40px",
  width: "fit-content",
  // ...highlightCSS,
};

const LinkButton = styled.a(({ color, gridArea, highlighted, margin }) => {
  return {
    background: colors[color],
    gridArea,
    margin,
    position: "relative",
    textDecoration: "none",
    ...commonStyle,
    ...highlight(highlighted),
  };
});

const SubmitButton = styled.input(
  ({ color, gridArea, highlighted, margin }) => {
    return {
      background: colors[color],
      border: "none",
      fontSize: 16,
      gridArea,
      margin,
      position: "relative",
      textDecoration: "none",
      ...commonStyle,
      ...highlight(highlighted),
    };
  }
);

const Button = ({
  children,
  color = "blue",
  gridArea,
  margin,
  onClick,
  pdf,
  submit,
}) => {
  const { highlighted, props } = useHighlight();

  if (submit) {
    return (
      <SubmitButton
        type="submit"
        color={color}
        gridArea={gridArea}
        highlighted={highlighted}
        margin={margin}
        {...submit}
        {...props}
      />
    );
  }

  return (
    <LinkButton
      color={color}
      gridArea={gridArea}
      highlighted={highlighted}
      href={pdf}
      margin={margin}
      target="_blank"
      {...props}
    >
      {children}
    </LinkButton>
  );
};

export default Button;

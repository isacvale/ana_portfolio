import React from "react";
import styled from "styled-components";
import { theme } from "../../utils/theme";
import { MIN_PADDING } from "../../constants";

const variantStyles = {
  default: {},
  panel: {
    height: 68,
    position: "fixed",
    right: MIN_PADDING,
    top: 0,
  },
};

const StyledButton = styled.button(({ variant }) => ({
  background: theme.colors.transparent,
  border: "none",
  cursor: "pointer",
  gridColumn: "-1",
  height: "100%",
  position: "relative",
  width: 68,
  zIndex: 1,
  ...variantStyles[variant],
}));

const StyledIcon = styled.img({
  width: 30,
});

const NavigationHamburger = ({ open, onClick, variant = "default" }) => {
  const iconPath = open ? "/icon_times.png" : "/icon_hamburger.png";
  return (
    <StyledButton onClick={onClick} variant={variant}>
      <StyledIcon src={iconPath} alt="toggle menu" />
    </StyledButton>
  );
};

export default NavigationHamburger;

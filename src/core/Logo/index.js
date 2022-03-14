import React from "react";
import styled from "styled-components";
import { LOGO_FULL_LG, LOGO_FULL_SM, LOGO_SM } from "../../constants";

const StyledImg = styled.img(({ extraStyle, logo }) => ({
  height: logo === LOGO_SM ? 64 : undefined,
  ...extraStyle,
}));

const StyledButton = styled.button({
  border: "none",
  background: "transparent",
  cursor: "pointer",
});

const Logo = ({
  extraStyle,
  logo = LOGO_FULL_SM,
  homePage,
  isSmallScreen,
  moveToIdx,
  setIsOpen,
  isOpen,
}) => {
  console.log({ isOpen });
  const handleClick = () => {
    if (isOpen) setIsOpen(false);
    if (homePage) moveToIdx.current(0);
    if (isSmallScreen) {
      const el = document.querySelector("#view_intro");
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <StyledButton onClick={handleClick}>
      <StyledImg
        alt="Ana Arado logo"
        src={logo}
        logo={logo}
        extraStyle={extraStyle}
      />
    </StyledButton>
  );
};

export default Logo;

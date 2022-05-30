import React from "react";
import { useNavigate } from "react-router-dom";
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
  blockTab,
  extraStyle,
  logo = LOGO_FULL_SM,
  homePage,
  isSmallScreen,
  moveToIdx,
  setIsOpen,
  isOpen,
  logoLinksHome,
}) => {
  const navigate = useNavigate()

  const handleClick = () => {
    if (homePage) {
      if (isSmallScreen) {
        const el = document.querySelector("#view_intro");
        el.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      } else {
        moveToIdx.current(0);
      }
    } else {
      navigate("/", { replace: true })
    }
    if (isOpen) {
      setIsOpen(false);
    }
  };
  return (
    <StyledButton onClick={handleClick} tabIndex={blockTab? "-1" : "0"}>
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

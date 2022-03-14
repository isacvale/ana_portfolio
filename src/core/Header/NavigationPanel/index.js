import React, { useEffect } from "react";
import styled from "styled-components";
import { theme } from "../../../utils/theme";
import Logo from "../../Logo";
import { LOGO_FULL_SM } from "../../../constants";
import Menu from "./Menu";
import { MENU_OPTIONS } from "../../../constants";
import NavigationLink from "../NavigationLink";
import SocialIcons from "../../SocialIcons";
import NavigationHamburger from "../NavigationHamburger";

const StyledAside = styled.aside({
  background: theme.colors.cream,
  height: "100vh",
  left: 0,
  position: "fixed",
  top: 0,
  width: "100vw",
  zIndex: 100,
});

const logoExtraStyle = {
  left: 8,
  height: 85,
  position: "fixed",
  top: 8,
};

const socialIconsExtraStyle = {
  position: "absolute",
  bottom: 30,
  left: 0,
  right: 0,
  margin: "0 auto",
  width: "fit-content",
};

const compareStrings = (a, b) => {
  const la = a.toLowerCase();
  const lb = b.toLowerCase();
  return la.localeCompare(lb, "en", { sensitivity: "base" }) === 0;
};

const NavigationPanel = ({
  currentPage,
  author,
  onClosePanel,
  homePage,
  moveToIdx,
  isSmallScreen,
  setIsOpen,
  isOpen,
}) => {
  useEffect(() => {
    const body = document.querySelector("body");
    body.classList.add("blockScroll");
    return () => body.classList.remove("blockScroll");
  }, []);

  const handleClick = (idx) => () => {
    onClosePanel();
    const elId = [
      "view_intro",
      "view_portfolio",
      "view_resume",
      "view_contact",
    ][idx];
    const el = document.querySelector(`#${elId}`);
    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    moveToIdx.current(idx);
  };

  const isActive = (name) => {
    return compareStrings(name, currentPage);
  };

  return (
    <StyledAside className="NavigationPanel">
      <Logo
        logo={LOGO_FULL_SM}
        extraStyle={logoExtraStyle}
        moveToIdx={moveToIdx}
        isSmallScreen={isSmallScreen}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
      />
      <NavigationHamburger open onClick={onClosePanel} variant="panel" />

      <Menu>
        {MENU_OPTIONS.map(({ name, path }, idx) => (
          <NavigationLink
            key={name}
            label={name}
            isActive={isActive(name)}
            variant="panel"
            path={path}
            homePage={homePage}
            clickCallback={handleClick(idx + 1)}
          />
        ))}
      </Menu>
      <SocialIcons extraStyle={socialIconsExtraStyle} />
    </StyledAside>
  );
};

export default NavigationPanel;

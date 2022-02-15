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
  position: "fixed",
  bottom: 30,
  left: 0,
  right: 0,
  margin: "0 auto",
  width: "fit-content",
};

const NavigationPanel = ({ author, xxx: onClosePanel }) => {
  useEffect(() => {
    const body = document.querySelector("body");
    body.classList.add("blockScroll");
    return () => body.classList.remove("blockScroll");
  }, []);

  return (
    <StyledAside className="NavigationPanel">
      <Logo logo={LOGO_FULL_SM} extraStyle={logoExtraStyle} />
      <NavigationHamburger open onClick={onClosePanel} variant="panel" />
      <Menu>
        {MENU_OPTIONS.map(({ name, path }) => (
          <NavigationLink
            key={name}
            label={name}
            isActive={name === "Portfolio"}
            variant="panel"
            path={path}
          />
        ))}
      </Menu>
      <SocialIcons extraStyle={socialIconsExtraStyle} />
    </StyledAside>
  );
};

export default NavigationPanel;

import React, { useContext, useState } from "react";
import styled from "styled-components";
import Columns from "../Columns";
import Logo from "../Logo";
import { LOGO_SM } from "../../constants";
import NavigationFull from "./NavigationFull";
import NavigationHamburger from "./NavigationHamburger";
import NavigationPanel from "./NavigationPanel";
import SizeContext from "../../utils/SizeContext";
import { HEADER_HEIGHT } from "../../constants";
import { theme } from "../../utils/theme";

const {
  colors: { shadowLight, shadowMedium },
} = theme;

const StyledHeader = styled.header(({ isOpaque }) => ({
  background: `hsla(0, 50%, 100%, ${isOpaque ? 0.7 : 0})`,
  backdropFilter: isOpaque ? "blur(4px)" : "blur(0)",
  boxShadow: isOpaque
    ? `0 3px 24px 0 ${shadowLight}, 0 1px 8px 0 ${shadowMedium}`
    : undefined,
  height: HEADER_HEIGHT,
  position: "fixed",
  top: 0,
  width: "100%",
  zIndex: 100,
  transition: "background 0.4s, box-shadow 0.4s, blur 0.4s",
}));

const Header = ({
  currentPage,
  homePage,
  keepSmallLogo,
  moveToIdx,
  logoLinksHome,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollTop, template } = useContext(SizeContext);
  const showFullNavigation = ["laptop", "desktop"].includes(template);
  const showSmallLogo =
    keepSmallLogo || [("mobile", "tablet")].includes(template) || !scrollTop;

  const handleHamburgerClick = () => {
    setIsOpen(!isOpen);
  };

  const isOpaque = !scrollTop;

  const isSmallScreen = ["mobile", "tablet"].includes(template);

  return (
    <StyledHeader isOpaque={isOpaque}>
      <Columns>
        {showSmallLogo && (
          <Logo
            logo={LOGO_SM}
            currentPage={currentPage}
            homePage={homePage}
            moveToIdx={moveToIdx}
            isSmallScreen={isSmallScreen}
            setIsOpen={setIsOpen}
            isOpen={isOpen}
            logoLinksHome={logoLinksHome}
          />
        )}
        {showFullNavigation && (
          <NavigationFull
            currentPage={currentPage}
            homePage={homePage}
            moveToIdx={moveToIdx}
            isSmallScreen={isSmallScreen}
            setIsOpen={setIsOpen}
            isOpen={isOpen}
          />
        )}
        {!showFullNavigation && (
          <NavigationHamburger open={isOpen} onClick={handleHamburgerClick} />
        )}
        {isOpen && (
          <NavigationPanel
            currentPage={currentPage}
            onClosePanel={handleHamburgerClick}
            author="nonsense"
            homePage={homePage}
            moveToIdx={moveToIdx}
            setIsOpen={setIsOpen}
            isOpen={isOpen}
            isSmallScreen={isSmallScreen}
          />
        )}
      </Columns>
    </StyledHeader>
  );
};

export default Header;

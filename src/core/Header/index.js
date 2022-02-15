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

const StyledHeader = styled.header({
  height: HEADER_HEIGHT,
});

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sizes = useContext(SizeContext);
  const showFullNavigation = ["laptop", "desktop"].includes(sizes.template);

  const handleHamburgerClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <StyledHeader>
      <Columns>
        <Logo logo={LOGO_SM} />
        {showFullNavigation && <NavigationFull />}
        {!showFullNavigation && (
          <NavigationHamburger open={isOpen} onClick={handleHamburgerClick} />
        )}
        {isOpen && (
          <NavigationPanel xxx={handleHamburgerClick} author="nonsense" />
        )}
      </Columns>
    </StyledHeader>
  );
};

export default Header;

import React, { useContext } from "react";
import styled from "styled-components";
import NavigationLink from "./NavigationLink";
import SizeContext from "../../utils/SizeContext";
import { MENU_OPTIONS } from "../../constants";

const StyledNav = styled.nav({
  display: "flex",
  flexDirection: "row",
  gap: 16,
  gridColumn: "-1",
  height: "100%",
});

const compareStrings = (a, b) => {
  const la = a.toLowerCase();
  const lb = b.toLowerCase();
  return la.localeCompare(lb, "en", { sensitivity: "base" }) === 0;
};

const NavigationFull = ({ currentPage, homePage, moveToIdx }) => {
  const isActive = (name) => {
    if (!currentPage) return false;
    return compareStrings(name, currentPage);
  };

  return (
    <StyledNav>
      {MENU_OPTIONS.map(({ index, name, path }) => (
        <NavigationLink
          key={name}
          label={name}
          path={path}
          isActive={isActive(name)}
          index={index}
          homePage={homePage}
          moveToIdx={moveToIdx}
        />
      ))}
    </StyledNav>
  );
};

export default NavigationFull;

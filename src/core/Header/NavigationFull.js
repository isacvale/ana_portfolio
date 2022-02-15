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

const NavigationFull = () => {
  const stuff = useContext(SizeContext);
  console.log("hmmm", stuff);

  return (
    <StyledNav>
      {MENU_OPTIONS.map(({ name, path }) => (
        <NavigationLink
          key={name}
          label={name}
          path={path}
          isActive={name === "Portfolio"}
        />
      ))}
    </StyledNav>
  );
};

export default NavigationFull;

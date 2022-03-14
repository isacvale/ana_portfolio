import React, { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../utils/theme";
import SizeContext from "../../utils/SizeContext";
const {
  colors: { purple },
} = theme;

// const SectionTitle = ({ children, ...args }) => {
//   return <div>{children}</div>;
// };

// const SectionTitle = styled.h2(({ small }) => ({
//   color: small ? undefined : purple,
//   fontFamily: "Dexa Pro",
//   fontSize: small ? 24 : 30,
//   fontWeight: small ? 700 : 800,
//   gridColumn: "1 / 4",
//   margin: 0,
// }));

const StyledH2 = styled.h2(({ gridColumn }) => ({
  color: purple,
  fontFamily: "Dexa Pro",
  fontSize: 30,
  fontWeight: 800,
  gridColumn,
  margin: 0,
}));

const StyledH3 = styled.h3(({ gridColumn }) => ({
  fontFamily: "Dexa Pro",
  fontSize: 24,
  fontWeight: 700,
  gridColumn,
  margin: 0,
}));

const SectionTitle = ({ small, ...args }) => {
  const Title = small ? StyledH3 : StyledH2;

  const { template } = useContext(SizeContext);
  const isSmallScreen = ["mobile", "tablet"].includes(template);

  const gridColumn = isSmallScreen ? "1 / -1" : "1 / 4";

  return <Title {...args} gridColumn={gridColumn} />;
};

export default SectionTitle;

import React, { useContext } from "react";
import styled from "styled-components";
import Columns from "../Columns";
import SizeContext from "../../utils/SizeContext";
import { theme } from "../../utils/theme";

const {
  colors: { purple },
} = theme;

const Main = styled.p({
  fontFamily: "Dexa Pro",
  fontSize: 24,
  fontWeight: 600,
  gridColumn: "1 / 5",
  gridRow: "3 / span 1",
  margin: 0,
});

const Focus = styled.p({
  fontFamily: "Dexa Pro",
  fontWeight: 900,
  fontSize: 14,
  gridColumn: "1 / 5",
  gridRow: "5 / span 1",
  margin: 0,
});

const Minor = styled.p(({ extraStyle }) => ({
  fontFamily: "Dexa Pro",
  fontWeight: 200,
  fontSize: 14,
  gridColumn: "1 / 5",
  gridRow: "7 / span 1",
  margin: 0,
  ...extraStyle,
}));

const ProjectDescription = ({ children, extraStyle, variant }) => {
  const Description =
    {
      main: Main,
      focus: Focus,
      minor: Minor,
    }[variant] || (({ children }) => <p>{children}</p>);

  return <Description extraStyle={extraStyle}>{children}</Description>;
};

export default ProjectDescription;

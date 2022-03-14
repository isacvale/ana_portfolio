import React, { useContext } from "react";
import styled from "styled-components";
import Columns from "../Columns";
import SizeContext from "../../utils/SizeContext";
import { theme } from "../../utils/theme";

const {
  colors: { purple },
} = theme;

const ProjectTitle = styled.h1({
  alignSelf: "end",
  color: purple,
  fontFamily: "Dexa Pro",
  fontSize: 52,
  fontWeight: 800,
  gridRow: "1 / span 1",
  margin: 0,
});

export default ProjectTitle;

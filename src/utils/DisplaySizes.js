import React, { useContext } from "react";
import styled from "styled-components";
import SizeContext from "./SizeContext";

const StyledAside = styled.aside({
  position: "fixed",
  bottom: 0,
});

const DisplaySizes = () => {
  const size = useContext(SizeContext);
  return <StyledAside>{size.template}</StyledAside>;
};

export default DisplaySizes;

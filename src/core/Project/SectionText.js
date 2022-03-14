import React, { useContext } from "react";
import styled from "styled-components";
import SizeContext from "../../utils/SizeContext";

const StyledDiv = styled.div(({ isSmallScreen }) => ({
  gridColumn: isSmallScreen ? "1 / -1" : "4 / -1",
}));

const SectionText = ({ children, ...args }) => {
  const { template } = useContext(SizeContext);
  const isSmallScreen = ["mobile"].includes(template);

  return (
    <StyledDiv isSmallScreen={isSmallScreen} {...args}>
      {children}
    </StyledDiv>
  );
};

export default SectionText;

import React, { useContext } from "react";
import styled from "styled-components";
import SizeContext from "../../utils/SizeContext";
import Columns from "../Columns";

const Wrapper = styled.div(({ isSmallScreen }) => ({
  margin: isSmallScreen ? "0 0 64px" : "0 0 120px",
  // "&:last-of-type": {
  //   margin: 0,
  // },
}));

const SectionGrid = ({ children, columnsStyle, ...args }) => {
  const { template } = useContext(SizeContext);
  const isSmallScreen = ["mobile"].includes(template);

  return (
    <Wrapper isSmallScreen={isSmallScreen} {...args}>
      <Columns extraStyle={columnsStyle}>{children}</Columns>
    </Wrapper>
  );
};

export default SectionGrid;

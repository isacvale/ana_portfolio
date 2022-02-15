import React from "react";
import styled from "styled-components";
import { LOGO_FULL_LG, LOGO_FULL_SM, LOGO_SM } from "../../constants";

const StyledImg = styled.img(({ extraStyle, logo }) => ({
  height: logo === LOGO_SM ? 64 : undefined,
  ...extraStyle,
}));

const Logo = ({ extraStyle, logo = LOGO_FULL_SM }) => {
  return (
    <StyledImg
      alt="Ana Arado logo"
      src={logo}
      logo={logo}
      extraStyle={extraStyle}
    />
  );
};

export default Logo;

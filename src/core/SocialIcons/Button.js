import React from "react";
import styled from "styled-components";

const StyledAnchor = styled.a({
  alignItems: "center",
  display: "flex",
  width: 26,
  height: 26,
});

const StyledImg = styled.img({
  width: "100%",
});

const Button = ({ link: { name, icon, url } }) => {
  return (
    <StyledAnchor href={url} target="_blank">
      <StyledImg src={icon} alt={name} />
    </StyledAnchor>
  );
};

export default Button;

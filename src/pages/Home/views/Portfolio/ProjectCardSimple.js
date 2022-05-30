import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import SizeContext from "../../../../utils/SizeContext";
import highlight from "../../../../utils/highlight";
import { theme } from "../../../../utils/theme";
import shadows from "../../../../utils/shadows";

const { colors } = theme;

const StyledSection = styled.section(({ highlighted }) => {
  return {
    ...shadows(),
    display: "flex",
    flexDirection: "column",
    padding: 0,
    // minWidth: 240,
    minWidth: 190,
    width: "100%",
    maxWidth: 360,
    height: "fit-content",
    aspectRatio: "1 / 1",
    position: "relative",
    "&:focus": {
      outline: "none",
    },
    ...highlight(highlighted),
  };
});

const StyledLink = styled(Link)({
  position: "relative",
  '&:focus': {
    outline: 'none',
  }
});

const StyledImgMini = styled.img({
  display: "block",
  width: "100%",
});

const StyledImgFull = styled.img({
  height: 140,
  objectFit: "cover",
  width: "100%",
});

const cardBodyCommon = {
  boxSizing: "border-box",
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "column",
};

const CardBodyMini = styled.div(({ highlighted }) => ({
  ...cardBodyCommon,
  backdropFilter: "blur(3px)",
  background: colors.glassyOrange,
  height: "100%",
  left: 0,
  opacity: highlighted ? 1 : 0,
  padding: "22px 12px 18px",
  position: "absolute",
  top: 0,
  width: "100%",
}));

const CardBodyFull = styled.div(({ highlighted }) => ({
  ...cardBodyCommon,
  background: colors.lightGray,
  flex: 1,
  padding: "25px 17px",
  width: "100%",
}));

const ProjectCardSimple = ({
  blockTab,
  project: { type, name, focus, system, ref, img },
}) => {
  const [highlighted, setHighlighted] = useState(false);

  const addHighlight = () => setHighlighted(true);
  const removeHighlight = () => setHighlighted(false);

  const StyledImg = StyledImgMini;

  return (
    <StyledSection
      highlighted={highlighted}
      onMouseEnter={addHighlight}
      onMouseLeave={removeHighlight}
      onFocus={addHighlight}
      onBlur={removeHighlight}
    >
      <StyledLink to={`/${ref}`} tabIndex={blockTab ? -1 : 0}>
        <StyledImg src={img} alt={name} />
      </StyledLink>
    </StyledSection>
  );
};

export default ProjectCardSimple;

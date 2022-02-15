import React, { useContext, useState } from "react";
import styled from "styled-components";
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
    minWidth: 240,
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

const StyledImgMini = styled.img({
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

const StyledTitle = styled.h3(({ template }) => ({
  fontFamily: "Dexa Pro",
  fontSize: template === "mobile" ? 18 : 20,
  fontWeight: 700,
  lineHeight: "24.64px",
  margin: 0,
}));

const StyledText = styled.p({
  fontFamily: "Dexa Pro",
  fontSize: 14,
  lineHeight: "17.25px",
  fontWeight: 600,
  margin: 0,
});

const CommonText = styled.div({
  display: "flex",
  flexDirection: "column",
});

const ProjectCard = ({ project: { type, name, focus, system, ref, img } }) => {
  const [highlighted, setHighlighted] = useState(false);

  const { template } = useContext(SizeContext);

  const addHighlight = () => setHighlighted(true);
  const removeHighlight = () => setHighlighted(false);

  const StyledImg = template === "mobile" ? StyledImgFull : StyledImgMini;
  const CardBody = template === "mobile" ? CardBodyFull : CardBodyMini;

  return (
    <StyledSection
      highlighted={highlighted}
      onMouseEnter={addHighlight}
      onMouseLeave={removeHighlight}
      tabIndex="0"
      onFocus={addHighlight}
      onBlur={removeHighlight}
    >
      <StyledImg src={img} alt={name} />
      <CardBody highlighted={highlighted}>
        <StyledTitle>{`${type} - ${name}`}</StyledTitle>
        <CommonText>
          <StyledText template={template}>{`Focus: ${focus.join(
            ", "
          )}`}</StyledText>
          <StyledText>{`System: ${system}`}</StyledText>
        </CommonText>
      </CardBody>
    </StyledSection>
  );
};

export default ProjectCard;

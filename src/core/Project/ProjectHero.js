import React, { useContext } from "react";
import styled from "styled-components";
import Columns from "../Columns";
import SizeContext from "../../utils/SizeContext";

const StyledWrapper = styled.div({
  height: "100vh",
  minHeight: "max-content",
});

const extraStyle = (template) => ({
  gridTemplateRows: {
    mobile:
      "64vh 30px min-content 30px min-content 15px min-content 15px min-content 15px 1fr",
    tablet:
      "64vh 30px min-content 30px min-content 15px min-content 15px min-content 15px 1fr",
    laptop:
      "40vh 30px min-content 30px min-content 15px min-content 15px min-content 15px 1fr",
    desktop:
      "40vh 30px min-content 30px min-content 15px min-content 15px min-content 15px 1fr",
  }[template],
  gridRowGap: 0,
  position: "relative",
});

const ProjectHero = ({ children }) => {
  const { template } = useContext(SizeContext);
  return (
    <StyledWrapper data-name="ProjectHero">
      <Columns extraStyle={extraStyle(template)}>{children}</Columns>
    </StyledWrapper>
  );
};

const Wrapper = styled.div({
  minHeight: "max-content",
  height: "100vh",
  maxHeight: 1000,
});

const DataSlot = styled.div(({ isSmallScreen, template }) => ({
  gridColumn: {
    mobile: "1 / -1",
    tablet: "1 / -1",
    laptop: "1 / 6",
    desktop: "1 / 5",
  }[template],
  gridRow: isSmallScreen ? "4 / 5" : "2 / 3",
}));

const ImageSlot = styled.div(({ isSmallScreen, template }) => ({
  gridColumn: {
    mobile: "2 / -2",
    tablet: "2 / -2",
    laptop: "7 / -1",
    desktop: "6 / -1",
  }[template],
  gridRow: "2 / 3",
}));

export const ProjectHeroView = ({ data: ProjData, image: ProjImage }) => {
  const { template } = useContext(SizeContext);
  const isSmallScreen = ["mobile", "tablet"].includes(template);

  const extraStyle = {
    ...{
      mobile: {
        gridTemplateRows: "1fr auto 30px auto 1fr",
      },
      tablet: {
        gridTemplateRows: "1fr auto 30px auto 1fr",
      },
      laptop: {
        gridTemplateRows: "1fr auto 1fr",
      },
      desktop: {
        gridTemplateRows: "1fr auto 1fr",
      },
    }[template],
    // height: "unset",
    gridRowGap: 0,
  };

  return (
    <Wrapper data-name="Wrapper">
      <Columns extraStyle={extraStyle} data-name="Columns">
        <ImageSlot template={template} isSmallScreen={isSmallScreen}>
          <ProjImage />
        </ImageSlot>
        <DataSlot template={template} isSmallScreen={isSmallScreen}>
          <ProjData />
        </DataSlot>
      </Columns>
    </Wrapper>
  );
};

export default ProjectHero;

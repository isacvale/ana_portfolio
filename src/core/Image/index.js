import React, { useState } from "react";
import styled from "styled-components";
import Lightbox from "react-image-lightbox";
import "../../../node_modules/react-image-lightbox/style.css";
import { theme } from "../../utils/theme";

const StyledButton = styled.button({
  alignItems: "center",
  border: "none",
  boxShadow: theme.shadows[0],
  cursor: "pointer",
  display: "flex",
  padding: 0,
  width: "100%",
  img: {
    width: "100%",
  },
});

const Image = ({ currentImage, imageList }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [current, setCurrent] = useState(currentImage);

  const { alt: mainAlt, src: mainSrc } = imageList[currentImage];
  const { src } = imageList[current];

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const prevSrcIdx = current - 1 >= 0 ? current - 1 : imageList.length - 1;
  const nextSrcIdx = current + 1 < imageList.length ? current + 1 : 0;

  const onNext = () => setCurrent(nextSrcIdx);
  const onPrev = () => setCurrent(prevSrcIdx);

  return (
    <>
      <StyledButton type="button" onClick={toggleOpen}>
        <img src={mainSrc} alt={mainAlt} />
      </StyledButton>
      {isOpen && (
        <Lightbox
          mainSrc={src}
          nextSrc={imageList[nextSrcIdx].src}
          prevSrc={imageList[prevSrcIdx].src}
          onCloseRequest={toggleOpen}
          onMoveNextRequest={onNext}
          onMovePrevRequest={onPrev}
        />
      )}
    </>
  );
};

export default Image;
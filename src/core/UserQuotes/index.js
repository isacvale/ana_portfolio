import React, { useContext, useState } from "react";
import styled from "styled-components";
import Lightbox from "react-image-lightbox";
import quotes from "../../assets/quote_marks.svg";
import { theme } from "../../utils/theme";
import SizeContext from "../../utils/SizeContext";

const Wrapper = styled.div(({ variant }) => ({
  alignItems: "center",
  display: "flex",
  flexDirection: { left: "row", right: "row-reverse", mobile: "column" }[
    variant
  ],
  gap: { mobile: 24 }[variant] || 48,
  margin: "0 0 110px",
  ":first-of-type": {
    margin: "80px 0 110px",
  },
  ":last-of-type": {
    margin: "0 0 65px",
  },
  "& > img": {
    height: 184,
  },
}));

const TextArea = styled.div({
  cursor: "pointer",
  display: "flex",
  fontSize: 24,
  fontFamily: "Dexa Pro",
  fontWeight: 700,
  fontStyle: "italic",
  position: "relative",
  p: {
    color: theme.colors.offDark,
    margin: "0 36px 0 42px",
  },
});

const Quote = styled.img(({ variant = "left" }) => ({
  height: 22,
  position: "absolute",
  left: variant === "left" ? 0 : undefined,
  right: variant === "right" ? 0 : undefined,
  transform: variant === "right" ? "rotate(180deg)" : undefined,
  top: variant === "left" ? 0 : undefined,
  bottom: variant === "right" ? 28 : undefined,
}));

const ImgButton = styled.button({
  border: "none",
  cursor: "pointer",
  padding: 0,
  borderRadius: "50%",
});

const UserQuotes = ({
  children,
  currentImage,
  imageList,
  variant: propVariant = "left",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [current, setCurrent] = useState(currentImage);

  const { template } = useContext(SizeContext);

  const prevSrcIdx = current - 1 >= 0 ? current - 1 : imageList.length - 1;
  const nextSrcIdx = current + 1 < imageList.length ? current + 1 : 0;

  const onNext = () => setCurrent(nextSrcIdx);
  const onPrev = () => setCurrent(prevSrcIdx);

  const toggleOpen = () => {
    setCurrent(currentImage);
    setIsOpen(!isOpen);
  };

  const currentData = imageList[currentImage];
  const { alt, large, src } = currentData;

  const variant = template === "mobile" ? "mobile" : propVariant;

  return (
    <>
      <Wrapper variant={variant}>
        <ImgButton onClick={toggleOpen}>
          <img src={src} alt={alt} height="184" />
        </ImgButton>
        <TextArea onClick={toggleOpen}>
          <Quote src={quotes} alt="" height="22" variant="left" />
          <p>{children}</p>
          <Quote src={quotes} alt="" height="22" variant="right" />
        </TextArea>
      </Wrapper>
      {isOpen && (
        <Lightbox
          mainSrc={imageList[current].large}
          nextSrc={imageList[nextSrcIdx].large}
          prevSrc={imageList[prevSrcIdx].large}
          onCloseRequest={toggleOpen}
          onMoveNextRequest={onNext}
          onMovePrevRequest={onPrev}
        />
      )}
    </>
  );
};

export default UserQuotes;

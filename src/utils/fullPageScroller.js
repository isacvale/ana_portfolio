import React, { createContext, useEffect, useState } from "react";
import styled from "styled-components";
import restrictScroll from "../utils/restrict-scroll";
import tweening from "tweening";
import myTweening from "./myTweening";

// const ScrollerContext = createContext({
//   getCurrentPage: () => {},
//   setCurrentPage: () => {},
//   nextPage: () => {},
//   previousPage: () => {},
// });

const StyledPage = styled.div(({ isEnabled }) => ({
  height: isEnabled ? "100vh" : undefined,
  maxHeight: isEnabled ? "100vh" : undefined,
}));

const Page = ({ children, isEnabled, ref, list }) => {
  return (
    <StyledPage id="ref" isEnabled={isEnabled}>
      {children}
    </StyledPage>
  );
};

// export const scrollerControls = {
//   getCurrentPage: () => {},
//   goToPage: () => {},
//   nextPage: () => {},
//   previousPage: () => {},
// };

const PageScroller = ({
  children,
  isEnabled,
  list,
  moveToIdx,
  currentPage,
  setCurrentPage,
}) => {
  const childrenList = React.Children.toArray(children);
  const idList = childrenList.map((child) => child.props.id);

  moveToIdx.current = (idx) => {
    setCurrentPage(idList[idx]);
  };

  const getCurrentPage = () => {
    const amountScrolled = window.pageYOffset;
    const screenHeight = window.innerHeight;
    return Math.round(amountScrolled / screenHeight);
  };

  const goToNext = (direction) => () => {
    const pageIdx = idList.findIndex((item) => item === currentPage);
    const nextIdx = direction === "next" ? pageIdx + 1 : pageIdx - 1;
    const nextPage = idList[nextIdx];
    if (nextPage) {
      setCurrentPage(nextPage);
    }
  };

  useEffect(() => setCurrentPage(idList[getCurrentPage()]), []);

  useEffect(() => {
    const goNext = goToNext("next");
    const goPrevious = goToNext("previous");

    if (isEnabled) {
      document.addEventListener("flipup", goPrevious);
      document.addEventListener("flipdown", goNext);
      return () => {
        document.removeEventListener("flipup", goPrevious);
        document.removeEventListener("flipdown", goNext);
      };
    } else {
      return () => {};
    }
  }, [isEnabled, currentPage]);

  useEffect(() => {
    if (isEnabled) {
      setCurrentPage(idList[getCurrentPage()]);
      restrictScroll.add(document.querySelector("body"));
      return () => restrictScroll.clear();
    } else {
      return () => {};
    }
  }, [isEnabled]);

  // Animate to position
  useEffect(() => {
    const pageIdx = idList.findIndex((item) => item === currentPage);
    const from = window.scrollY;
    const to = pageIdx * window.innerHeight;

    if (isEnabled && from !== to) {
      const moveTo = (dest) => window.scrollTo(0, dest);
      myTweening({
        duration: 160,
        from: window.scrollY,
        to: pageIdx * window.innerHeight,
        next: moveTo,
        // easing: "easeInOutQuint",
      });
    }
  }, [currentPage]);

  // Fix lost of alignment when window is resized
  useEffect(() => {
    if (isEnabled) {
      const fixAlignment = () => {
        const pageIdx = idList.findIndex((item) => item === currentPage);
        window.scrollTo(0, pageIdx * window.innerHeight);
      };
      window.addEventListener("resize", fixAlignment);
      return () => window.removeEventListener("resize", fixAlignment);
    }
    return () => {};
  }, [isEnabled, idList]);

  return React.Children.map(children, (Child) => (
    <Page isEnabled={isEnabled} key={Child.props.id}>
      {Child}
    </Page>
  ));
};

export default PageScroller;

export { Page };

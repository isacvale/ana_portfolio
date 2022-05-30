import React, { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Header from "../../core/Header";
import Intro from "./views/Intro";
import Portfolio from "./views/Portfolio";
import Contact from "./views/Contact";
import Resume from "./views/Resume";
import SizeContext from "../../utils/SizeContext";
import addBackground from "../../utils/addBackground";
import PageScroller from "../../utils/fullPageScroller";

const StyledPage = styled.div(({ template }) => {
  if (["mobile", "tablet"].includes(template)) return addBackground(template);
  return {
    position: "relative",
    "&::before": {
      content: "''",
      width: "100%",
      height: "400vh",
      position: "absolute",
      top: 0,

      ...addBackground(template),
    },
  };
});

const getBaseIdx = () => {
  const { hash } = document.location;
  const idxDict =
    {
      "#portfolio": 1,
      "#resume": 2,
      "#contact": 3,
    }[hash] || 0;
  return idxDict;
};

const Home = () => {
  const { template } = useContext(SizeContext);
  const [currentPage, setCurrentPage] = useState(0);
  const moveToIdx = useRef(() => {});
  const isFullPageApp = ["laptop", "desktop"].includes(template);

  useEffect(() => {
    document.querySelector("body").classList.add("no-scrolling");
    return () =>
      document.querySelector("body").classList.remove("no-scrolling");
  }, []);

  useEffect(() => {
    window.scroll({ top: 0, behavior: "auto" });
    moveToIdx.current(getBaseIdx());
  }, [isFullPageApp]);

  return (
    <StyledPage template={template}>
      <Header moveToIdx={moveToIdx} homePage currentPage={currentPage} />
      <PageScroller
        moveToIdx={moveToIdx}
        isEnabled={isFullPageApp}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      >
        <Intro id="intro" blockTab={isFullPageApp && currentPage !== 'intro'}/>
        <Portfolio id="portfolio"  blockTab={isFullPageApp && currentPage !== 'portfolio'}/>
        <Resume id="resume"  blockTab={isFullPageApp && currentPage !== 'resume'}/>
        <Contact id="contact"  blockTab={isFullPageApp && currentPage !== 'contact'}/>
      </PageScroller>
    </StyledPage>
  );
};

export default Home;

import React, { StrictMode, useEffect, useState } from "react";
import "./index.css";
import Routes from "./Routes";
import { SizeProvider } from "./utils/SizeContext";
import throttle from "./utils/throttle";

// const breakpoints = [500, 800, 1100]
const breakpoints = [580, 800, 1100];

function App() {
  const [sizes, setSizes] = useState({
    width: breakpoints[0],
    height: breakpoints[1],
    template: "mobile",
    scrollTop: true,
  });

  const getSizes = throttle(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const template =
      width > breakpoints[2]
        ? "desktop"
        : width > breakpoints[1]
        ? "laptop"
        : width > breakpoints[0]
        ? "tablet"
        : "mobile";
    const orientation = height > width ? "portrait" : "landscape";
    const scrollTop = window.scrollY < 140;
    setSizes({ height, orientation, template, width, scrollTop });
  });

  useEffect(() => {
    getSizes();
    window.addEventListener("resize", getSizes);
    window.addEventListener("scroll", getSizes);
    document.addEventListener("flipup", getSizes);
    document.addEventListener("flipdown", getSizes);
    return () => {
      window.removeEventListener("resize", getSizes);
      window.removeEventListener("scroll", getSizes);
      document.removeEventListener("flipup", getSizes);
      document.removeEventListener("flipdown", getSizes);
    };
  }, []);

  return (
    <StrictMode>
      <SizeProvider value={sizes}>
        <Routes />
      </SizeProvider>
    </StrictMode>
  );
}

export default App;

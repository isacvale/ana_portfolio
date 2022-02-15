import React, { StrictMode, useEffect, useState } from "react";
import "./index.css";
import Routes from "./Routes";
import { SizeProvider } from "./utils/SizeContext";
import throtle from "./utils/throtle";

function App() {
  const [sizes, setSizes] = useState({
    width: 500,
    height: 800,
    template: "mobile",
  });

  const getSizes = throtle(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const template =
      width > 1100
        ? "desktop"
        : width > 800
        ? "laptop"
        : width > 500
        ? "tablet"
        : "mobile";
    const orientation = height > width ? "portrait" : "landscape";
    setSizes({ height, orientation, template, width });
  });

  useEffect(() => {
    getSizes();
    window.addEventListener("resize", getSizes);
    return () => window.removeEventListener("resize", getSizes);
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

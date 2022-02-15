import React, { useContext } from "react";
import styled from "styled-components";
import Header from "../../core/Header";
import Intro from "./views/Intro";
import Portfolio from "./views/Portfolio";
import Contact from "./views/Contact";
import Resume from "./views/Resume";
import Footer from "../../core/Footer";
import { theme } from "../../utils/theme";
import SizeContext from "../../utils/SizeContext";

const {
  colors: { bgDark, bgLight, bgMedium },
} = theme;

const StyledPage = styled.div(({ template }) => ({
  backgroundImage: [
    `linear-gradient(13deg, transparent 70%, ${bgLight} 70%)`,
    `linear-gradient(342deg, transparent 30%, white 30%)`,
    `linear-gradient(12deg, transparent 32%, ${bgDark} 32%)`,
    `linear-gradient(0deg, transparent 0%, white 0%)`,
    `linear-gradient(0deg, transparent 0%, ${bgMedium} 0%)`,
  ].join(", "),
  backgroundRepeat: "no-repeat",
  backgroundSize: [
    "100vw 100vh",
    "100vw 100vh",
    "100vw 200vh",
    "100vw 70%",
    "100vw 87%",
  ].join(", "),
}));

const Home = () => {
  const { template } = useContext(SizeContext);
  return (
    <StyledPage template={template}>
      <Header />
      <Intro />
      <Portfolio />
      <Resume />
      <Contact />
      <Footer />
    </StyledPage>
  );
};

export default Home;

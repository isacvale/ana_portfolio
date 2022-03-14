import React from "react";
import styled from "styled-components";
import SectionGrid from "../../../core/Project/SectionGrid";
import SectionTitle from "../../../core/Project/SectionTitle";
import SectionText from "../../../core/Project/SectionText";
import Paragraph from "../../../core/Paragraph";
import { ImageWrapper, VitaImages } from "./shared";

const UserFlow = () => (
  <SectionGrid>
    <SectionTitle>User flow</SectionTitle>
    <SectionText>
      <Paragraph>
        The final version of the user flow has five links on the navigation:
        Home, Nutrient Calculator, Quiz, Contact, and Team. Information on
        fruits, vegetables, vitamins, and minerals can be accessed through the
        Home, Nutrient Calculator's results, and linked on the pages dedicated
        to foods and nutrients, keeping the user on the page and inviting them
        to learn more about nutrition.
      </Paragraph>
    </SectionText>
    <ImageWrapper>
      <VitaImages currentImage={0} />
    </ImageWrapper>
  </SectionGrid>
);

export default UserFlow;

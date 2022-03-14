import React from "react";
import SectionGrid from "../../../core/Project/SectionGrid";
import SectionTitle from "../../../core/Project/SectionTitle";
import SectionText from "../../../core/Project/SectionText";
import Paragraph from "../../../core/Paragraph";
import UserQuotes from "../../../core/UserQuotes";
import vita_user_boy from "../../../assets/projectImg/vita/vita_user_boy.png";
import vita_user_family from "../../../assets/projectImg/vita/vita_user_family.png";
import vita_user_girl from "../../../assets/projectImg/vita/vita_user_girl.png";
import vita_user_boy_sheet from "../../../assets/projectImg/vita/vita_user_boy_sheet.png";
import vita_user_family_sheet from "../../../assets/projectImg/vita/vita_user_family_sheet.png";
import vita_user_girl_sheet from "../../../assets/projectImg/vita/vita_user_girl_sheet.png";

const LoadedUserQuotes = ({ children, currentImage }) => {
  const imageList = [
    { src: vita_user_boy, alt: "", large: vita_user_boy_sheet },
    { src: vita_user_family, alt: "", large: vita_user_family_sheet },
    { src: vita_user_girl, alt: "", large: vita_user_girl_sheet },
  ];
  const variant = currentImage % 2 ? "left" : "right";
  return (
    <UserQuotes
      currentImage={currentImage}
      img={imageList[currentImage].src}
      variant={variant}
      imageList={imageList}
    >
      {children}
    </UserQuotes>
  );
};

const TheUser = () => (
  <SectionGrid>
    <SectionTitle>The User</SectionTitle>
    <SectionText>
      <Paragraph>
        Our users have different motivations for engaging with Vita. Those range
        from caring about themselves, others, or even trying to reverse the
        negative effects of years of eating poorly. Please explore the personas
        our project was based on by clicking on their pictures or quotes.
      </Paragraph>
      <LoadedUserQuotes currentImage={0}>
        Life should be enjoyed, and in order to do so, we must take care of
        ourselves. The time is always right to start creating better habits.
      </LoadedUserQuotes>
      <LoadedUserQuotes currentImage={1}>
        Cooking is a passion of mine. To know that I can use it to improve my
        family’s health makes the experience even better.
      </LoadedUserQuotes>
      <LoadedUserQuotes currentImage={2}>
        What you eat literally becomes you. You have a choice in what you’re
        made of.
      </LoadedUserQuotes>
      {/* <UserQuotes img={vita_user_boy} variant="right">
        Life should be enjoyed, and in order to do so, we must take care of
        ourselves. The time is always right to start creating better habits.
      </UserQuotes>
      <UserQuotes img={vita_user_family}>
        Cooking is a passion of mine. To know that I can use it to improve my
        family’s health makes the experience even better.
      </UserQuotes>
      <UserQuotes img={vita_user_girl} variant="right">
        What you eat literally becomes you. You have a choice in what you’re
        made of.
      </UserQuotes> */}
    </SectionText>
  </SectionGrid>
);

export default TheUser;

import React, { useContext } from "react";
import styled from "styled-components";
import SizeContext from "../../../utils/SizeContext";
import SectionGrid from "../../../core/Project/SectionGrid";
import SectionTitle from "../../../core/Project/SectionTitle";
import SectionText from "../../../core/Project/SectionText";
import Paragraph from "../../../core/Paragraph";
import { theme } from "../../../utils/theme";
import vita_proposal from "../../../assets/projectImg/vita/vita_proposal.png";
import vita_ui_kit from "../../../assets/projectImg/vita/vita_ui_kit.png";
import vita_design_system from "../../../assets/projectImg/vita/vita_design_system.png";
import uiPDF from "../../../assets/vita_UI.pdf";
import uiProjProp from "../../../assets/vita_project_proposal.pdf";

const DownloadButton = styled.a(({ template }) => ({
  alignItems: "center",
  border: "none",
  boxShadow: theme.shadows[0],
  cursor: "pointer",
  display: "flex",
  gridColumn: {
    mobile: "2 / -2",
    tablet: "4 / -1",
    laptop: "5 / 12",
    desktop: "5 / 12",
  }[template],
  padding: 0,
  width: "100%",
  img: {
    width: "100%",
  },
}));

const MoreDetails = () => {
  const { template } = useContext(SizeContext);

  return (
    <>
      <SectionGrid>
        <SectionTitle>More details</SectionTitle>
        <SectionText>
          <Paragraph>
            You can find out more about the project in the files below. Feel
            free to view the pdf files for the UI kit, proposal, and a sample of
            a Design System for Vita.
          </Paragraph>
        </SectionText>
      </SectionGrid>
      <SectionGrid>
        <SectionTitle small>UI Kit</SectionTitle>
        <DownloadButton
          aria-label="Download UI Kit as PDF."
          href={uiPDF}
          download="Vita_UI_Kit.pdf"
          template={template}
        >
          <img src={vita_ui_kit} alt="Booklet depicting Vita's UI Kit." />
        </DownloadButton>
      </SectionGrid>
      <SectionGrid>
        <SectionTitle small>Project's Proposal</SectionTitle>
        <DownloadButton
          aria-label="Download Project's Proposal as PDF."
          href={uiProjProp}
          download="Vita_Project_Proposal.pdf"
          template={template}
        >
          <img
            src={vita_proposal}
            alt="Booklet depicting Vita's Project Proposal."
          />
        </DownloadButton>
      </SectionGrid>
      <SectionGrid>
        <SectionTitle small>Design System</SectionTitle>
        <DownloadButton
          aria-label="Download Design System as PDF."
          href={uiProjProp}
          download="Vita_Design_System.pdf"
          template={template}
        >
          <img
            src={vita_design_system}
            alt="Booklet depicting Vita's Design System."
          />
        </DownloadButton>
      </SectionGrid>
    </>
  );
};

export default MoreDetails;

import resumePdf from "../assets/eric_bowser_resume_2026.pdf";
import resumeDocx from "../assets/eric_bowser_resume_2026.docx";
import { C } from "../theme/colors";

export const RESUME_FILES = [
  {
    label: "PDF",
    downloadLabel: "Resume PDF",
    href: resumePdf,
    download: "Eric_Bowser_Resume_2026.pdf",
    accent: C.vermillion,
  },
  {
    label: "DOCX",
    downloadLabel: "Resume DOCX",
    href: resumeDocx,
    download: "Eric_Bowser_Resume_2026.docx",
    accent: C.teal,
  },
];

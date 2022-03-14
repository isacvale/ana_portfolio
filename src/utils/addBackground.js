import { theme } from "../utils/theme";

const {
  colors: { bgDark, bgLight, bgMedium },
} = theme;

const addBackground = (template) => ({
  backgroundImage: [
    `linear-gradient(13deg, transparent 70%, ${bgLight} 70%)`,
    `linear-gradient(342deg, transparent 48%, white 48%)`,
    `linear-gradient(12deg, transparent 32%, ${bgDark} 32%)`,
    `linear-gradient(0deg, transparent 0%, white 0%)`,
    `linear-gradient(0deg, transparent 0%, ${bgMedium} 0%)`,
  ].join(", "),
  backgroundRepeat: "no-repeat",
  backgroundSize: [
    "100vw 100vh",
    "100vw 150vh",
    "100vw 200vh",
    "100vw 70%",
    "100vw 87%",
  ].join(", "),
});

export default addBackground;

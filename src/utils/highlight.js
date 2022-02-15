import { theme } from "./theme";

const { colors } = theme;

const baseStyle = {
  content: '""',
  width: "calc(100% + 8px)",
  height: "calc(100% + 8px)",
  position: "absolute",
  top: -4,
  left: -4,
  transition: "box-shadow 0.3s",
};

const highlight = (highlighted, color = colors.purple) =>
  highlighted
    ? {
        outline: "none",
        "&:before": {
          ...baseStyle,
          boxShadow: `0 0 0 4px ${color}`,
          opacity: 1,
        },
      }
    : {
        outline: "none",
        "&:before": {
          ...baseStyle,
          boxShadow: `0 0 0 0 ${color}`,
          opacity: 0,
        },
      };

export default highlight;

export const highlightCSS = {
  "&:focus::after": {
    ...baseStyle,
  },
  "&:hover::after": {
    ...baseStyle,
  },
};

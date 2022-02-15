import { theme } from "./theme";

const { colors } = theme;

const shadows = (level = 1, inset = false) =>
  ({
    1: {
      boxShadow: `${inset ? "inset" : ""} 0 1px 3px 0 ${colors.shadowMedium},
    ${inset ? "inset" : ""} 0 3px 6px 2px ${colors.shadowLight}`,
    },
    2: {
      boxShadow: `${inset ? "inset" : ""} 0 3px 3px 0 ${colors.shadowMedium},
    ${inset ? "inset" : ""} 0 4px 8px 4px ${colors.shadowLight}`,
    },
  }[level]);

export default shadows;

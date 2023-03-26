import { COLORS } from "./Colors";
import { FONT_SIZE } from "./FontSize";

export const fontStyle = (color, size, spacing) => {
  return {
    color: color || COLORS.white,
    textTransform: "capitalize",
    fontSize: size || FONT_SIZE.heading1,
    letterSpacing: spacing || 0.4,
  };
};

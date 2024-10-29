export type TypographyVariant =
  | "default"
  | "title"
  | "defaultSemiBold"
  | "subtitle"
  | "link";

export type FontSizeType = 32 | 20 | 16;
export type FontWeight = "bold" | "600" | "500";
export type LineHeightType = 32 | 30 | 24 | 16;

export const TypographyStyle = {
  default: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "600",
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "600",
  },
  title: {
    fontSize: 32,
    lineHeight: 32,
    fontWeight: "600",
  },
  subtitle: {
    fontSize: 20,
    lineHeight: 24,
    fontWeight: "500",
  },
  link: {
    fontSize: 16,
    lineHeight: 30,
    fontWeight: "500",
  },
};

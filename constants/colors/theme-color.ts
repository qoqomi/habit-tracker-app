const GrayScale = {
  White: "#FCFCFC",
  Gray1: "#F4F4F4",
  Gray2: "#DEDEDE",
  Gray3: "#CCCCCC",
  Gray4: "#8E8E8E",
  Black: "#0F0F0F",
} as const;

const PermissibleOpacity = {
  WhiteOp10: "rgba(255, 255, 255, 0.1)",
  WhiteOp20: "rgba(255, 255, 255, 0.2)",
  WhiteOp30: "rgba(255, 255, 255, 0.3)",
  WhiteOp40: "rgba(255, 255, 255, 0.4)",
  WhiteOp50: "rgba(255, 255, 255, 0.5)",
  WhiteOp60: "rgba(255, 255, 255, 0.6)",
  WhiteOp70: "rgba(255, 255, 255, 0.7)",
  WhiteOp80: "rgba(255, 255, 255, 0.8)",
  WhiteOp90: "rgba(255, 255, 255, 0.9)",

  BlackOp05: "rgba(26, 26, 26, 0.05)",
  BlackOp10: "rgba(26, 26, 26, 0.1)",
  BlackOp15: "rgba(26, 26, 26, 0.15)",

  BlackOp20: "rgba(26, 26, 26, 0.2)",
  BlackOp30: "rgba(26, 26, 26, 0.3)",
  BlackOp40: "rgba(26, 26, 26, 0.4)",
  BlackOp50: "rgba(26, 26, 26, 0.5)",
  BlackOp60: "rgba(26, 26, 26, 0.6)",
  BlackOp70: "rgba(26, 26, 26, 0.7)",
  BlackOp80: "rgba(26, 26, 26, 0.8)",
  BlackOp90: "rgba(26, 26, 26, 0.9)",
} as const;

const Gradient = {
  GradientWhite:
    "linear-gradient(90deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)",
  GradientWhiteStart: "#FFFFFF",
  GradientWhiteEnd: "rgba(255, 255, 255, 0)",
  GradientBlack: "linear-gradient(90deg, #333333 0%, rgba(51, 51, 51, 0) 100%)",
  GradientBlackStart: "#333333",
  GradientBlackEnd: "rgba(51, 51, 51, 0)",
} as const;

const Additional = {
  Yellow: "#F9E11D",
};

const DefaultFontColor = {
  defaultColor: GrayScale.Black,
};

export const ThemeColor = {
  ...GrayScale,
  ...PermissibleOpacity,
  ...Gradient,
  ...DefaultFontColor,
  ...Additional,
};

export type ThemeColorType = typeof ThemeColor;
export type ThemeColorKeyType = keyof ThemeColorType;

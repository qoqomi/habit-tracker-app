import {
  FontSizeType,
  LineHeightType,
  TypographyStyle,
  TypographyVariant,
} from "@/types/typography";
import React, { ReactNode, useMemo } from "react";
import { Text, TextProps, TextStyle } from "react-native";

export interface TypographyProps extends TextProps {
  variant: TypographyVariant;
  color?: string;
  fontSize?: FontSizeType;
  lineHeight?: LineHeightType;
  align?: "left" | "center" | "right";
  style?: TextStyle;
  children?: ReactNode;
}

const getFontSize = ({ variant, ...props }: TypographyProps) => {
  return props.fontSize ?? TypographyStyle[variant].fontSize;
};
const getLineHeight = ({ variant, ...props }: TypographyProps) => {
  return props.lineHeight ?? TypographyStyle[variant].lineHeight;
};

const getFontWeight = ({ variant, ...props }: TypographyProps) => {
  return props.fontSize ?? TypographyStyle[variant].fontWeight;
};

export const Typography = ({
  variant,
  color = "Black",
  align = "left",
  style,
  ...props
}: TypographyProps) => {
  const typographyStyle = TypographyStyle[
    variant as TypographyVariant
  ] as TextStyle;
  if (!typographyStyle) {
    throw new Error(` Invalid typography variant [${variant}]`);
  }
  const propertyStyle = useMemo(() => {
    const fontSize = getFontSize({ variant, ...props });
    const lineHeight = getLineHeight({ variant, ...props });
    const fontWeight = getFontWeight({ variant, ...props });
    return {
      fontSize,
      lineHeight,
      fontWeight,
      color,
      textAlign: align,
    } as TextStyle;
  }, [align, color, props, variant]);

  return (
    <Text style={[typographyStyle, propertyStyle, style]} {...props}>
      {props.children}
    </Text>
  );
};

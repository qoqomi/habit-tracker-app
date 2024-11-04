import { ThemeColor } from "@/constants/colors";
import styled from "@emotion/native";
import React from "react";
import { TouchableOpacityProps } from "react-native";
import { Typography } from "../typography/Typography";

interface CustomButtonProps extends TouchableOpacityProps {
  label: string;
  disabled?: boolean;
  onPress: () => void;
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  onPress,
  disabled = false,
  ...props
}) => (
  <StyledButton
    onPress={onPress}
    disabled={disabled}
    style={{
      backgroundColor: disabled ? ThemeColor.BlackOp10 : ThemeColor.Yellow,
    }}
    activeOpacity={0.8}
    {...props}
  >
    <Typography variant="body1">{label}</Typography>
  </StyledButton>
);

const StyledButton = styled.TouchableOpacity`
  width: 100%;
  height: 44px;
  background-color: ${ThemeColor.Yellow};
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`;

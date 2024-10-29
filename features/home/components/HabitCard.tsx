import { ThemeColor } from "@/assets/colors";
import { Typography } from "@/components/typography/Typography";
import styled from "@emotion/native";
import { useState } from "react";

interface HabitCardProps {
  label: string;
  checkValue: boolean;
  onPressButton?: (check: boolean) => void;
}

export const HabitCard = ({
  label,
  checkValue,
  onPressButton,
}: HabitCardProps) => {
  const [isChecked, setIsChecked] = useState(checkValue ?? false);

  const handlePressButton = () => {
    setIsChecked((prev) => !prev);
    onPressButton?.(isChecked);
  };
  return (
    <Container>
      <CheckButton onPress={handlePressButton} />
      <RightComponent>
        <Typography variant="default">{label}</Typography>
        <Typography variant="caption" color={ThemeColor.Gray4}>
          15분
        </Typography>
      </RightComponent>
    </Container>
  );
};

const Container = styled.View`
  background-color: ${ThemeColor.Gray1};
  padding: 12px 16px;
  border-radius: 16px;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  border: 2px dotted ${ThemeColor.Gray3};
`;

const RightComponent = styled.View``;

const CheckButton = styled.Pressable`
  width: 24px;
  height: 24px;
  border-radius: 14px;
  border: 1px solid ${ThemeColor.BlackOp90};
  background: ${ThemeColor.Yellow};
`;

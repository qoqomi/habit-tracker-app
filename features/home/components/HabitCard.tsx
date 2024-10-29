import { Checkbox } from "@/components/checkbox/Checkbox";
import { Typography } from "@/components/typography/Typography";
import { ThemeColor } from "@/constants/colors";
import styled from "@emotion/native";
import { useState } from "react";

interface HabitCardProps {
  label: string;
  checkValue: boolean;
  onPressCard: () => void;
  onPressButton?: (check: boolean) => void;
}

export const HabitCard = ({
  label,
  checkValue,
  onPressCard,
  onPressButton,
}: HabitCardProps) => {
  const [isChecked, setIsChecked] = useState(checkValue ?? false);

  const handlePressButton = () => {
    setIsChecked((prev) => !prev);
    onPressButton?.(isChecked);
  };
  return (
    <Container isChecked={isChecked} onPress={onPressCard}>
      <Checkbox isChecked={isChecked} onPress={handlePressButton} />

      <RightComponent>
        <Typography variant="default">{label}</Typography>
        <Typography variant="caption" color={ThemeColor.Gray4}>
          15분
        </Typography>
      </RightComponent>
    </Container>
  );
};

const Container = styled.Pressable<{ isChecked: boolean }>`
  position: relative;

  flex-direction: row;
  align-items: center;

  padding: 12px 16px;
  gap: 8px;

  background-color: ${({ isChecked }) =>
    isChecked ? ThemeColor.Gray2 : ThemeColor.Gray1};

  border-radius: 16px;

  border: 2px dotted ${ThemeColor.Gray3};
`;

const RightComponent = styled.View`
  padding-left: 34px;
`;

import { Checkbox } from "@/components/checkbox/Checkbox";
import { Typography } from "@/components/typography/Typography";
import { ThemeColor } from "@/constants/colors";
import styled from "@emotion/native";
import { useState } from "react";
import { GetHabit } from "../apis/getHabit";
import { convertedCustomFrequency } from "../utils/convertedFrequency";

interface HabitCardProps {
  habit: GetHabit;
  onPressCard: (habit: GetHabit) => void;
  onPressCheck?: (id: number, isChecked: boolean) => void;
}

export const HabitCard = ({
  habit,
  onPressCard,
  onPressCheck,
}: HabitCardProps) => {
  const [isChecked, setIsChecked] = useState(habit.completed ?? false);

  const { id, title, frequency, dayOfWeek } = habit;
  const handlePressButton = () => {
    setIsChecked((prev) => !prev);
    onPressCheck?.(id, isChecked);
  };
  return (
    <Container isChecked={isChecked} onPress={() => onPressCard(habit)}>
      <Checkbox isChecked={isChecked} onPress={handlePressButton} />

      <RightComponent>
        <Typography variant="default">{title}</Typography>
        <Typography variant="caption" color={ThemeColor.Gray4}>
          {convertedCustomFrequency(frequency, dayOfWeek)}
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

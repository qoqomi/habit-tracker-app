import { TouchableButton } from "@/components/button/TouchableButton";
import { Typography } from "@/components/typography/Typography";
import { ThemeColor } from "@/constants/colors";
import { useWheelPickerBottomSheet } from "@/context/bottom-sheet/WheelPickerBottomSheetProvider";
import { InputHeader } from "@/features/habit/components/InputHeader";
import { DayOfWeek, Frequency } from "@/features/home/apis/getHabit";
import { useSingleHabit } from "@/features/hooks/useSingleHabit";
import styled from "@emotion/native";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Keyboard } from "react-native";

export default function Page() {
  const { habitId, title, frequency, dayOfWeek } = useLocalSearchParams<{
    habitId: string;
    title: string;
    frequency: Frequency;
    dayOfWeek: DayOfWeek[];
  }>();

  const { createHabit } = useSingleHabit(habitId as string);

  const [selectedFrequency, setSelectedFrequency] = useState(
    frequency ?? "매일"
  );
  const { frequency: bottomsheetFrequency, open: bottomSheetOpen } =
    useWheelPickerBottomSheet();

  const handlePressRepeatDay = () => {
    Keyboard.dismiss();
    bottomSheetOpen({
      selectedFrequency: selectedFrequency || "매일",
    });
  };

  const handleRegister = () => {
    createHabit({
      title,
      frequency: selectedFrequency as Frequency,
      dayOfWeek,
    });
  };

  return (
    <Container>
      <InputHeader />
      <RepeatDayWrapper onPress={handlePressRepeatDay}>
        <Typography variant="body1">반복 요일</Typography>
        <Typography variant="body1" color={ThemeColor.BlackOp40}>
          {bottomsheetFrequency ?? "매일"}
        </Typography>
      </RepeatDayWrapper>
      <TouchableButton onPress={handleRegister} label="빠른 등록" />
    </Container>
  );
}

const Container = styled.KeyboardAvoidingView`
  flex: 1;
  padding: 8px 16px;
  gap: 12px;
`;

const RepeatDayWrapper = styled.Pressable`
  padding: 16px 16px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${ThemeColor.Gray2};
  border-radius: 8px;
`;

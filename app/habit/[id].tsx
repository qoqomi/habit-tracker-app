import { CustomButton } from "@/components/button/TouchableButton";
import { Typography } from "@/components/typography/Typography";
import { ThemeColor } from "@/constants/colors";
import { useWheelPickerBottomSheet } from "@/context/bottom-sheet/WheelPickerBottomSheetProvider";
import { InputHeader } from "@/features/habit/components/InputHeader";
import { DayOfWeek, Frequency } from "@/features/home/apis/getHabit";
import { useSingleHabit } from "@/features/hooks/useSingleHabit";
import styled from "@emotion/native";
import { router, useLocalSearchParams } from "expo-router";
import { useMemo, useState } from "react";
import { Keyboard } from "react-native";

export default function Page() {
  const {
    id: habitId,
    title: titleParams,
    frequency: frequencyParams,
    dayOfWeek,
  } = useLocalSearchParams<{
    id: string;
    title: string;
    frequency: Frequency;
    dayOfWeek: DayOfWeek[];
  }>();

  const { createHabit, modifyHabit } = useSingleHabit(habitId as string);

  const [title, setTitle] = useState(titleParams ?? "");

  const { frequency: bottomsheetFrequency, open: bottomSheetOpen } =
    useWheelPickerBottomSheet();

  const disabled = useMemo(() => {
    const isTitleEmpty = title.length === 0;
    const isFrequencyUnchanged = frequencyParams === bottomsheetFrequency;
    const isTitleUnchanged = title === titleParams;

    return isTitleEmpty || (isFrequencyUnchanged && isTitleUnchanged);
  }, [title, titleParams, frequencyParams, bottomsheetFrequency]);

  const handleChangeTitleValue = (text: string) => {
    setTitle(text);
  };

  const handlePressRepeatDay = () => {
    Keyboard.dismiss();
    bottomSheetOpen({ selectedFrequency: frequencyParams });
  };

  const handleRegister = () => {
    if (habitId) {
      modifyHabit({
        habitId,
        title,
        frequency: bottomsheetFrequency as Frequency,
        dayOfWeek: dayOfWeek,
      });
    } else {
      createHabit({
        title,
        frequency: bottomsheetFrequency as Frequency,
        dayOfWeek: dayOfWeek,
      });
    }

    router.back();
  };

  return (
    <Container>
      <InputHeader defaultValue={title} onChange={handleChangeTitleValue} />
      <RepeatDayWrapper onPress={handlePressRepeatDay}>
        <Typography variant="body1">반복 요일</Typography>
        <Typography variant="body1" color={ThemeColor.BlackOp40}>
          {bottomsheetFrequency ?? "매일"}
        </Typography>
      </RepeatDayWrapper>
      <CustomButton
        onPress={handleRegister}
        label={habitId ? "수정" : "빠른 등록"}
        disabled={disabled}
      />
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

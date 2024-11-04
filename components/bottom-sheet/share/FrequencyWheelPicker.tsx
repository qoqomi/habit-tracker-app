import { Typography } from "@/components/typography/Typography";
import { Frequency } from "@/features/home/apis/getHabit";
import styled from "@emotion/native";
import { useState } from "react";
import { DefaultWheelPicker } from "../DefaultWheelPicker";

const FREQUENCY = [
  { value: "매일" },
  { value: "주중" },
  { value: "주말" },
  { value: "사용자 지정" },
];

interface FrequencyWheelPickerProps {
  selectedValue?: string;
  onClose: () => void;
  onSubmit: (value: string) => void;
}
export const FrequencyWheelPicker = ({
  selectedValue,
  onClose,
  onSubmit,
}: FrequencyWheelPickerProps) => {
  const [frequency, setFrequency] = useState<Frequency | string>(
    selectedValue ?? "매일"
  );
  const handleChange = (value: string) => {
    setFrequency(value);
  };

  return (
    <>
      <TopNavigation>
        <SideButton onPress={onClose}>
          <Typography variant="default">닫기</Typography>
        </SideButton>
        <SideButton onPress={() => onSubmit(frequency)}>
          <Typography variant="default">완료</Typography>
        </SideButton>
      </TopNavigation>
      <DefaultWheelPicker
        selectedValue={selectedValue}
        options={FREQUENCY}
        onChange={handleChange}
      />
    </>
  );
};
const TopNavigation = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 0 16px;
  z-index: 1;
`;

const SideButton = styled.Pressable`
  width: 44px;
`;

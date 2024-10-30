import { DefaultWheelPicker } from "../DefaultWheelPicker";

const FREQUENCY = [
  { value: "매일" },
  { value: "주중" },
  { value: "주말" },
  { value: "사용자 지정" },
];

interface FrequencyWheelPickerProps {
  selectedValue: string;
  onChange: (value: string) => void;
}
export const FrequencyWheelPicker = ({
  selectedValue,
  onChange,
}: FrequencyWheelPickerProps) => {
  return (
    <DefaultWheelPicker
      selectedValue={selectedValue}
      options={FREQUENCY}
      onChange={onChange}
    />
  );
};

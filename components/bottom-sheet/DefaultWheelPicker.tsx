import WheelPicker from "react-native-wheely";

interface DefaultWheelPickerProps {
  selectedValue?: string;
  options: { value: string }[];
  onChange: (value: string) => void;
}

export const DefaultWheelPicker = ({
  selectedValue,
  options,
  onChange,
  ...props
}: DefaultWheelPickerProps) => {
  const labels = options?.map((option) => option.value);

  const selectedIndex = Math.max(
    options.findIndex((option) => option.value === selectedValue),
    0
  );

  const handleChange = (index: number) => {
    onChange(options[index].value);
  };
  return (
    <WheelPicker
      {...props}
      selectedIndex={selectedIndex}
      options={labels}
      onChange={(index) => handleChange(index)}
    />
  );
};

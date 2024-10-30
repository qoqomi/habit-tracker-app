import { ThemeColor } from "@/constants/colors";
import styled from "@emotion/native";
import { Typography } from "../typography/Typography";

interface TouchableButtonProps {
  label: string;
  onPress: () => void;
}
export const TouchableButton = ({ label, onPress }: TouchableButtonProps) => {
  return (
    <Button activeOpacity={0.8} onPress={onPress}>
      <Typography variant="body1">{label}</Typography>
    </Button>
  );
};

const Button = styled.TouchableOpacity`
  width: 100%;
  height: 44px;
  background-color: ${ThemeColor.Yellow};
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`;

import { ThemeColor } from "@/constants/colors";
import styled from "@emotion/native";

interface CheckButtonProps {
  isChecked: boolean;
  onPress?: () => void;
}

export const Checkbox = ({ isChecked = false, onPress }: CheckButtonProps) => {
  return (
    <ButtonGroup onPress={onPress}>
      {isChecked ? (
        <CheckedButton>
          <CheckedBody />
        </CheckedButton>
      ) : (
        <UncheckedButton />
      )}
    </ButtonGroup>
  );
};

const ButtonGroup = styled.Pressable`
  position: absolute;
  padding: 12px 16px;
  z-index: 1;
`;
const UncheckedButton = styled.View`
  width: 22px;
  height: 22px;
  border-radius: 14px;
  border: 1px solid ${ThemeColor.Gray3};
`;

const CheckedButton = styled.View`
  width: 22px;
  height: 22px;
  border-radius: 22px;
  align-items: center;
  justify-content: center;
  border: 2px solid ${ThemeColor.Yellow};
`;

const CheckedBody = styled.View`
  width: 16px;
  height: 16px;
  border-radius: 20px;
  background-color: ${ThemeColor.Yellow};
`;

import { ThemeColor } from "@/assets/colors";
import styled from "@emotion/native";

export const CheckButton = () => {
  return <Container></Container>;
};
const Container = styled.Pressable`
  width: 24px;
  height: 24px;
  border-radius: 14px;
  border: 1px solid ${ThemeColor.BlackOp90};
  background: ${ThemeColor.Yellow};
`;

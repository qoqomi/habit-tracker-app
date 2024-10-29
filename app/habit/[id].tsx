import { Typography } from "@/components/typography/Typography";
import { ThemeColor } from "@/constants/colors";
import { InputHeader } from "@/features/habit/components/InputHeader";
import styled from "@emotion/native";
import { useLocalSearchParams } from "expo-router";

export default function Page() {
  const { id } = useLocalSearchParams();

  const handlePressRepeatDay = () => {};

  return (
    <Container>
      <InputHeader />
      <RepeatDayWrapper onPress={handlePressRepeatDay}>
        <Typography variant="body1">반복 요일</Typography>
        <Typography variant="body1" color={ThemeColor.BlackOp40}>
          주중
        </Typography>
      </RepeatDayWrapper>
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

import { Typography } from "@/components/typography/Typography";
import { ThemeColor } from "@/constants/colors";
import styled from "@emotion/native";

export const HabitEmpty = () => {
  return (
    <Container>
      <Typography variant="default">할일을 추가해주세요!</Typography>
      <DefaultButton>
        <Typography variant="caption">새로운 습관 등록하기</Typography>
      </DefaultButton>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

const DefaultButton = styled.Pressable`
  padding: 8px 16px;
  border-radius: 8px;
  background: ${ThemeColor.Yellow};
`;

import { Typography } from "@/components/typography/Typography";
import { ThemeColor } from "@/constants/colors";
import { SCREEN } from "@/constants/screen";
import { HabitCardContainer } from "@/features/home/components/HabitCardContainer";
import styled from "@emotion/native";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const handleRegister = () => {
    router.push(SCREEN.habit);
  };

  return (
    <>
      <Container>
        <SafeAreaView edges={["top"]} />
        <HabitCardContainer />
      </Container>
      <Footer>
        <Button activeOpacity={0.8} onPress={handleRegister}>
          <Typography variant="body1">빠른 등록</Typography>
        </Button>
      </Footer>
    </>
  );
}

const Container = styled.View`
  padding: 8px 16px;
  flex: 1;
`;
const Footer = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;

  align-items: center;
  justify-content: center;

  padding: 0px 16px 16px;
`;

const Button = styled.TouchableOpacity`
  width: 100%;
  height: 44px;
  background-color: ${ThemeColor.Yellow};
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`;

import { CustomButton } from "@/components/button/TouchableButton";
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
        <CustomButton onPress={handleRegister} label="빠른 등록" />
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

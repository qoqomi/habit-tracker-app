import { Typography } from "@/components/typography/Typography";
import { ThemeColor } from "@/constants/colors";
import { SCREEN } from "@/constants/screen";
import { HabitCard } from "@/features/home/components/HabitCard";
import styled from "@emotion/native";
import { router } from "expo-router";
import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const data = Array.from({ length: 100 }, (v, i) => i);

export default function HomeScreen() {
  const handleRegister = () => {
    router.push(SCREEN.habit);
  };

  const handlePressUserHabit = () => {
    router.push(`${SCREEN.habit}`);
  };
  const renderCard = ({ item }) => {
    return (
      <HabitCard
        label="오늘의 할일"
        onPressCard={handlePressUserHabit}
        checkValue={true}
      />
    );
  };

  return (
    <>
      <Container>
        <SafeAreaView edges={["top"]} />
        <FlatList
          data={data}
          renderItem={renderCard}
          contentContainerStyle={{ gap: 8 }}
        />
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

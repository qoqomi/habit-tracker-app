import { HabitCard } from "@/features/home/components/HabitCard";
import styled from "@emotion/native";
import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const data = Array.from({ length: 100 }, (v, i) => i);

export default function HomeScreen() {
  const handlePressUserHabit = () => {};

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
    <Container>
      <SafeAreaView edges={["top"]} />
      <FlatList
        data={data}
        renderItem={renderCard}
        contentContainerStyle={{ gap: 8 }}
      />
    </Container>
  );
}

const Container = styled.View`
  padding: 8px 16px;
  flex: 1;
`;

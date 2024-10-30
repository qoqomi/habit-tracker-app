import { SCREEN } from "@/constants/screen";
import { router } from "expo-router";
import { FlatList } from "react-native";
import { useHabit } from "../hooks/useHabit";
import { HabitCard } from "./HabitCard";

const data = Array.from({ length: 100 }, (v, i) => i);

export const HabitCardContainer = () => {
  const { data } = useHabit();

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
    <FlatList
      data={data}
      renderItem={renderCard}
      contentContainerStyle={{ gap: 8 }}
    />
  );
};

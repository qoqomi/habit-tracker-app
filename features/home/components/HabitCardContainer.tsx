import { SCREEN } from "@/constants/screen";
import { router } from "expo-router";
import { FlatList } from "react-native";
import { GetHabitResponse } from "../apis/getHabit";
import { useHabit } from "../hooks/useHabit";
import { HabitCard } from "./HabitCard";
import { HabitEmpty } from "./HabitEmpty";

const data = Array.from({ length: 100 }, (v, i) => i);

export const HabitCardContainer = () => {
  const { data, isLoading } = useHabit();

  const handlePressUserHabit = () => {
    router.push(`${SCREEN.habit}`);
  };

  const renderCard = ({ item }: { item: GetHabitResponse }) => {
    return <HabitCard item={item} onPressCard={handlePressUserHabit} />;
  };

  if (isLoading) {
    return null;
  }

  if (data?.length === 0) {
    return <HabitEmpty />;
  }

  return (
    <FlatList
      data={data}
      renderItem={renderCard}
      contentContainerStyle={{ gap: 8 }}
    />
  );
};

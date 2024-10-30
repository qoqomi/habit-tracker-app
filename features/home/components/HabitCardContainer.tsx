import { SCREEN } from "@/constants/screen";
import { router } from "expo-router";
import { FlatList } from "react-native";
import { GetHabit } from "../apis/getHabit";
import { useHabit } from "../hooks/useHabit";
import { HabitCard } from "./HabitCard";
import { HabitEmpty } from "./HabitEmpty";

export const HabitCardContainer = () => {
  const { data, isLoading, updateCheck } = useHabit();

  const handlePressCheckButton = async (
    habitId: number,
    isChecked: boolean
  ) => {
    updateCheck(habitId, isChecked);
  };
  const handlePressUserHabit = () => {
    router.push(`${SCREEN.habit}`);
  };

  const renderCard = ({ item }: { item: GetHabit }) => {
    return (
      <HabitCard
        item={item}
        onPressCard={handlePressUserHabit}
        onPressCheck={handlePressCheckButton}
      />
    );
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

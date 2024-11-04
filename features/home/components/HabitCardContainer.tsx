import { SCREEN } from "@/constants/screen";
import { router } from "expo-router";
import { FlatList } from "react-native";
import { GetHabit } from "../apis/getHabit";
import { useHabit } from "../hooks/useHabit";
import { HabitCard } from "./HabitCard";
import { HabitEmpty } from "./HabitEmpty";

export const HabitCardContainer = () => {
  const { habits, isLoading, updateCheck } = useHabit();

  const handlePressCheckButton = async (
    habitId: number,
    isChecked: boolean
  ) => {
    updateCheck(habitId, isChecked);
  };
  const handlePressUserHabit = (habit: GetHabit) => {
    if (!habit) {
      return;
    }
    router.push({
      pathname: `${SCREEN.habit}/[id]`,
      params: {
        id: habit.id,
        title: habit.title,
        frequency: habit.frequency,
      },
    });
  };

  const renderCard = ({ item }: { item: GetHabit }) => {
    return (
      <HabitCard
        habit={item}
        onPressCard={handlePressUserHabit}
        onPressCheck={handlePressCheckButton}
      />
    );
  };

  if (isLoading) {
    return null;
  }

  if (habits?.length === 0) {
    return <HabitEmpty />;
  }

  return (
    <FlatList
      data={habits}
      renderItem={renderCard}
      contentContainerStyle={{ gap: 8 }}
    />
  );
};

import { useQueryClient } from "@tanstack/react-query";
import { DayOfWeek, Frequency, GetHabitResponse } from "../home/apis/getHabit";
import { QUERY_KEY } from "../home/hooks/useHabit";

interface CreatedHabitArgs {
  title: string;
  frequency: Frequency;
  dayOfWeek: DayOfWeek[];
}

const createHabitStatusInQuery = (
  oldData: GetHabitResponse,
  title: string,
  frequency: Frequency,
  dayOfWeek: DayOfWeek[]
) => {
  const newHabit = {
    id: oldData.data.length + 1, // Faker로 ID 생성
    order: oldData.data.length + 1,
    title,
    frequency,
    dayOfWeek: dayOfWeek || [],
    progress: [],
    completed: false,
  };

  return {
    ...oldData,
    data: [...oldData.data, newHabit],
  };
};

export const useSingleHabit = (habitId: string) => {
  const queryClient = useQueryClient();

  const createHabit = ({ title, frequency, dayOfWeek }: CreatedHabitArgs) => {
    queryClient.setQueryData(QUERY_KEY, (oldData: GetHabitResponse) =>
      createHabitStatusInQuery(oldData, title, frequency, dayOfWeek)
    );
  };

  return {
    createHabit,
  };
};

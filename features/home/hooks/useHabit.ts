import { useQuery, useQueryClient } from "@tanstack/react-query";
import { habitApis } from "../apis";
import { GetHabitResponse } from "../apis/getHabit";

const QUERY_KEY = "GET_HABIT";

const updateHabitStatusInQuery = (
  oldData: GetHabitResponse,
  habitId: number,
  isCheckend: boolean
): GetHabitResponse => {
  const formattedDate = formatDate(new Date());
  const updatedData = oldData.data.map((item) => {
    if (item.id === habitId) {
      return {
        ...item,
        completed: isCheckend,
        progress: [...item.progress, { date: formattedDate }],
      };
    }
    return item;
  });

  return {
    data: updatedData,
  };
};

export const useHabit = () => {
  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery({
    queryKey: [QUERY_KEY],
    queryFn: () => habitApis.getHabit(),
    select: (response) => response.data,
  });

  const updateCheck = (habitId: number, isCheckend: boolean) => {
    queryClient.setQueryData([QUERY_KEY], (oldData: GetHabitResponse) =>
      updateHabitStatusInQuery(oldData, habitId, isCheckend)
    );
  };

  return { data, isLoading, updateCheck };
};

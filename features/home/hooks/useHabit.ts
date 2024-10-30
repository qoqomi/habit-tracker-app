import { useQuery } from "@tanstack/react-query";
import { habitApis } from "../apis";

const QUERY_KEY = "GET_HABIT";

export const useHabit = () => {
  const { data, isLoading } = useQuery({
    queryKey: [QUERY_KEY],
    queryFn: () => habitApis.getHabit(),
    select: (response) => response,
  });
  console.log("dataa", data);
  return { data };
};

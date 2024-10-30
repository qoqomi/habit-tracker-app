import { MOCK_HABIT_LIST } from "./mock";

export enum Frequency {
  Daily = "매일",
  Weekdays = "주중",
  Weekends = "주말",
  Custom = "사용자 지정",
}

export enum DayOfWeek {
  Monday = "월",
  Tuesday = "화",
  Wednesday = "수",
  Thursday = "목",
  Friday = "금",
  Saturday = "토",
  Sunday = "일",
}

interface WeeklyProgress {
  date: string; // "2024-10-30",
}
export interface GetHabitResponse {
  id: number;
  order: number;
  title: string;
  frequency: Frequency;
  dayOfWeek?: DayOfWeek[];
  progress: WeeklyProgress[];
  completed: boolean;
}

export const getHabit = () => ({
  data: MOCK_HABIT_LIST,
});

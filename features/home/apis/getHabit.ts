import { MOCK_HABIT_LIST } from "./mock";

export enum Frequency {
  Daily = "daily",
  Weekdays = "weekdays",
  Weekends = "weekends",
  Custom = "custom",
}

export enum DayOfWeek {
  Monday = "Mon",
  Tuesday = "Tue",
  Wednesday = "Wed",
  Thursday = "Thu",
  Friday = "Fri",
  Saturday = "Sat",
  Sunday = "Sun",
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
}

export const getHabit = () => MOCK_HABIT_LIST;

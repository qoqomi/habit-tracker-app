import { DayOfWeek, Frequency, GetHabitResponse } from "./getHabit";

export const MOCK_HABIT_LIST: GetHabitResponse[] = [
  {
    id: 1,
    order: 1,
    title: "미라클모닝",
    frequency: Frequency.Daily,
    dayOfWeek: [],
    progress: [{ date: "2024-10-28" }, { date: "2024-10-29" }],
  },
  {
    id: 2,
    order: 2,
    title: "주중 운동",
    frequency: Frequency.Weekdays,
    dayOfWeek: [DayOfWeek.Monday, DayOfWeek.Wednesday, DayOfWeek.Friday],
    progress: [
      { date: "2024-10-28" },
      { date: "2024-10-30" },
      { date: "2024-11-01" },
    ],
  },
  {
    id: 3,
    order: 3,
    title: "주말 독서",
    frequency: Frequency.Weekends,
    dayOfWeek: [DayOfWeek.Saturday, DayOfWeek.Sunday],
    progress: [{ date: "2024-10-27" }, { date: "2024-11-02" }],
  },
  {
    id: 4,
    order: 4,
    title: "외국어 공부",
    frequency: Frequency.Custom,
    dayOfWeek: [DayOfWeek.Tuesday, DayOfWeek.Thursday], // 사용자가 선택한 요일
    progress: [{ date: "2024-10-29" }, { date: "2024-10-31" }],
  },
];

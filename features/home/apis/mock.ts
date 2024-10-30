import { GetHabitResponse } from "./getHabit";

export const MOCK_HABIT_LIST: GetHabitResponse[] = [
  {
    id: 1,
    order: 1,
    title: "미라클모닝",
    frequency: "매일", // "daily" -> "매일"
    dayOfWeek: [],
    progress: [{ date: "2024-10-28" }, { date: "2024-10-29" }],
    completed: true,
  },
  {
    id: 2,
    order: 2,
    title: "주중 운동",
    frequency: "주중", // "weekdays" -> "주중"
    dayOfWeek: ["화", "금", "토"], // ["Tue", "Fri", "Sat"] -> ["화", "금", "토"]
    progress: [
      { date: "2024-10-28" },
      { date: "2024-10-30" },
      { date: "2024-11-01" },
    ],
    completed: false,
  },
  {
    id: 3,
    order: 3,
    title: "주말 독서",
    frequency: "주말", // "weekends" -> "주말"
    dayOfWeek: ["화", "토"], // ["Tue", "Sat"] -> ["화", "토"]
    progress: [{ date: "2024-10-27" }, { date: "2024-11-02" }],
    completed: false,
  },
  {
    id: 4,
    order: 4,
    title: "외국어 공부",
    frequency: "사용자 지정", // "custom" -> "사용자 지정"
    dayOfWeek: ["수", "목"], // ["Wed", "Thu"] -> ["수", "목"]
    progress: [{ date: "2024-10-29" }, { date: "2024-10-31" }],
    completed: true,
  },
];

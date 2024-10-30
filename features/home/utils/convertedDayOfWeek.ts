import { DayOfWeek } from "../apis/getHabit";

export const convertedDayOfWeek = (days: string[]): DayOfWeek[] => {
  return days.map((day) => {
    switch (day) {
      case "월":
        return DayOfWeek.Monday;
      case "화":
        return DayOfWeek.Tuesday;
      case "수":
        return DayOfWeek.Wednesday;
      case "목":
        return DayOfWeek.Thursday;
      case "금":
        return DayOfWeek.Friday;
      case "토":
        return DayOfWeek.Saturday;
      case "일":
        return DayOfWeek.Sunday;
      default:
        throw new Error(`Invalid day: ${day}`);
    }
  });
};

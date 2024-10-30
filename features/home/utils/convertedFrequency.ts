import { DayOfWeek, Frequency } from "../apis/getHabit";

export const convertedFrequency = (frequency: string): Frequency => {
  switch (frequency) {
    case "매일":
      return Frequency.Daily;
    case "주중":
      return Frequency.Weekdays;
    case "주말":
      return Frequency.Weekends;
    case "사용자 지정":
      return Frequency.Custom;
    default:
      throw new Error(`Invalid frequency: ${frequency}`);
  }
};

export const convertedCustomFrequency = (
  frequency: Frequency,
  days?: DayOfWeek[]
) => {
  switch (frequency) {
    case Frequency.Custom:
      return days?.join(",");
    default:
      return frequency;
  }
};

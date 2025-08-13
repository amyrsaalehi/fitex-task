export type Day =
  | "saturday"
  | "sunday"
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday";

export type DayValuePair = {
  day: Day;
  value: number;
};

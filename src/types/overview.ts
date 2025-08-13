import type { DayValuePair } from "./common";

export type OverviewResponse = {
  revenue: DayValuePair[];
  installs: DayValuePair[];
};

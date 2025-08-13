import type { DayValuePair } from "./common";

export type Campaign = {
  id: string;
  name: string;
  installs: DayValuePair[];
};

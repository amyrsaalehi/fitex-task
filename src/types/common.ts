import { z } from "zod";

export const DaySchema = z.enum([
  "saturday",
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
]);

export type Day = z.infer<typeof DaySchema>;

export const DayValuePairSchema = z.object({
  day: DaySchema,
  value: z.number().nonnegative(),
});

export type DayValuePair = z.infer<typeof DayValuePairSchema>;

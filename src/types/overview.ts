import { z } from "zod";
import { DayValuePairSchema } from "./common";

export const OverviewResponseSchema = z.object({
  revenue: z.array(DayValuePairSchema),
  installs: z.array(DayValuePairSchema),
});

export type OverviewResponse = z.infer<typeof OverviewResponseSchema>;

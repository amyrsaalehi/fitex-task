import { z } from "zod";
import { DayValuePairSchema } from "./common";

export const CampaignSchema = z.object({
  id: z.string(),
  name: z.string().min(1),
  installs: z.array(DayValuePairSchema),
});

export type Campaign = z.infer<typeof CampaignSchema>;

export const CampaignsResponseSchema = z.array(CampaignSchema);

export type CampaignResponse = z.infer<typeof CampaignSchema>;

export const CreateCampaignSchema = z.object({
  name: z.string().min(1, "Name is required"),
});
export type CreateCampaignInput = z.infer<typeof CreateCampaignSchema>;

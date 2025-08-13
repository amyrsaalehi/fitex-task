import type { CampaignResponse } from "../types/campaign";
import type { OverviewResponse } from "../types/overview";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

// or simply we could use Axios to have AxiosResponse type (instead of generic T)
async function http<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${BASE_URL}${path}`, {
    headers: { "Content-Type": "application/json" },
    ...init,
  });
  if (!res.ok)
    throw new Error(`HTTP Error -> ${path} -> Status -> ${res.status}`);
  return res.json() as Promise<T>;
}

export const api = {
  getoverview: () => http<OverviewResponse>(`/overview`),
  getcampaigns: () => http<CampaignResponse>(`/campaigns`),
};

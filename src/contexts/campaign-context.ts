import { createContext } from 'react';

type Ctx = { selectedId: string | null; setSelectedId: (id: string) => void };
export const CampaignCtx = createContext<Ctx | undefined>(undefined);

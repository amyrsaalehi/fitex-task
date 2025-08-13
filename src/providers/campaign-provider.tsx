import { useState } from 'react';
import { storage } from '../api/storage';
import { CampaignCtx } from '../contexts/campaign-context';

export function CampaignProvider({ children }: { children: React.ReactNode }) {
  const [selectedId, setSelectedIdState] = useState<string | null>(() =>
    storage.getSelectedId()
  );
  const setSelectedId = (id: string) => {
    setSelectedIdState(id);
    storage.setSelectedId(id);
  };

  return (
    <CampaignCtx.Provider value={{ selectedId, setSelectedId }}>
      {children}
    </CampaignCtx.Provider>
  );
}

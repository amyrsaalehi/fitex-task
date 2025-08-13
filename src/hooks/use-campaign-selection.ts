import { useContext } from 'react';
import { CampaignCtx } from '../contexts/campaign-context';

export function useCampaignSelection() {
  const ctx = useContext(CampaignCtx);
  if (!ctx)
    throw new Error(
      'useCampaignSelection must be used within CampaignProvider'
    );
  return ctx;
}

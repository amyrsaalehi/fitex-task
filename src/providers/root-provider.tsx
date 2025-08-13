import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '../api/query-client';
import { CampaignProvider } from './campaign-provider';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CampaignProvider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </CampaignProvider>
  );
}

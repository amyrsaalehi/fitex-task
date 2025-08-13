import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import { useQuery } from '@tanstack/react-query';
import { api } from '../api/http';
import { CampaignsResponseSchema } from '../types/campaign';
import Card from '../components/ui/card';
import Spinner from '../components/ui/spinner';
import { useCampaignSelection } from '../hooks/use-campaign-selection';
import { campaign as mock } from '../mock/campaign';

export default function CampaignsPage() {
  const { data, isLoading, error } = useQuery({
    initialData: mock,
    queryKey: ['campaigns'],
    queryFn: async () =>
      CampaignsResponseSchema.parse(await api.getCampaigns()),
    staleTime: 5 * 60 * 1000,
  });

  const { selectedId, setSelectedId } = useCampaignSelection();

  if (isLoading)
    return (
      <Card>
        <Spinner />
      </Card>
    );

  if (error || !data) return <Card>Failed to load campaigns.</Card>;

  // not in a useMemo because of new feature of React v19
  const campaigns = data;
  const selected = campaigns.find((c) => c.id === selectedId) ?? campaigns[0];
  const barData = (selected?.installs ?? []).map(({ day, value }) => ({
    day,
    installs: value,
  }));

  return (
    <Card title="Campaigns">
      <div className="mb-4 spacex-2">
        <label htmlFor="campaign-selector">Campaign</label>
        <select
          id="campaign-selector"
          value={selected?.id ?? ''}
          onChange={(e) => setSelectedId(e.target.value)}
          className="border-1 border-slate-500 rounded-sm px-1 py-2 ml-2"
        >
          {campaigns.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>
      </div>

      <div style={{ width: '100%', height: 360 }}>
        <ResponsiveContainer>
          <BarChart data={barData}>
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="installs" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}

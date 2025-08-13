import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import { useOverview } from '../hooks/use-overview';
import Card from '../components/ui/card';
import Spinner from '../components/ui/spinner';

export default function OverviewPage() {
  const { data, isLoading, error } = useOverview();

  if (isLoading)
    return (
      <Card>
        <Spinner />
      </Card>
    );

  if (error || !data) return <Card>Failed to load overview.</Card>;

  return (
    <Card title="Overview (Weekly)">
      <div style={{ width: '100%', height: 360 }}>
        <ResponsiveContainer>
          <AreaChart
            data={data.chart}
            margin={{ left: 16, right: 16, top: 8, bottom: 8 }}
          >
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="installs" fillOpacity={0.2} />
            <Area type="monotone" dataKey="revenue" fillOpacity={0.2} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}

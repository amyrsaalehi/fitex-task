import { useQuery } from '@tanstack/react-query';
import { api } from '../api/http';
import { OverviewResponseSchema } from '../types/overview';
import type { Day, DayValuePair } from '../types/common';
import { overview } from '../mock/overview';

const order: Day[] = [
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
  'sunday',
];

function helperMerge(installs: DayValuePair[], revenue: DayValuePair[]) {
  const m = new Map<
    string,
    { day: string; installs: number; revenue: number }
  >();
  installs.forEach(({ day, value }) =>
    m.set(day, { day, installs: value, revenue: 0 })
  );
  revenue.forEach(({ day, value }) => {
    const prev = m.get(day) ?? { day, installs: 0, revenue: 0 };
    prev.revenue = value;
    m.set(day, prev);
  });
  return order.map((d) => m.get(d) ?? { day: d, installs: 0, revenue: 0 });
}

export function useOverview() {
  return useQuery({
    queryKey: ['overview'],
    initialData: overview,
    queryFn: async () => OverviewResponseSchema.parse(await api.getOverview()),
    select: (data) => ({
      raw: data,
      chart: helperMerge(data.installs, data.revenue),
    }),
    retry: 1,
    staleTime: 5 * 60 * 1000,
  });
}

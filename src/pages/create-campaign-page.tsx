import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  CreateCampaignSchema,
  CampaignsResponseSchema,
  CampaignSchema,
  type CreateCampaignInput,
  type Campaign,
} from '../types/campaign';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '../api/http';
import Card from '../components/ui/card';
import Spinner from '../components/ui/spinner';
import type { Day } from '../types/common';

const days: Day[] = [
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
  'sunday',
];

export default function CreateCampaignPage() {
  const qc = useQueryClient();
  const campaignsQ = useQuery({
    queryKey: ['campaigns'],
    queryFn: async () =>
      CampaignsResponseSchema.parse(await api.getCampaigns()),
    staleTime: 5 * 60 * 1000,
  });

  const create = useMutation({
    mutationFn: async (input: unknown) => CampaignSchema.parse(input),
    onSuccess: (newCampaign) => {
      qc.setQueryData(['campaigns'], (old: Campaign[] | unknown) =>
        Array.isArray(old) ? [...old, newCampaign] : [newCampaign]
      );
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
  } = useForm<CreateCampaignInput>({
    resolver: zodResolver(CreateCampaignSchema),
  });

  if (campaignsQ.isLoading)
    return (
      <Card>
        <Spinner />
      </Card>
    );
  if (campaignsQ.error || !campaignsQ.data)
    return <Card>Failed to load campaigns.</Card>;

  const onSubmit = (values: CreateCampaignInput) => {
    const campaigns = campaignsQ.data;
    const duplicate = campaigns.some(
      (c) => c.name.trim().toLowerCase() === values.name.trim().toLowerCase()
    );
    if (duplicate) {
      setError('name', { type: 'manual', message: 'Campaign already exists' });
      return;
    }

    const newCampaign: Campaign = {
      id: crypto.randomUUID(),
      name: values.name.trim(),
      installs: days.map((day) => ({ day, value: 0 })),
    } as const;

    create.mutate(newCampaign);
    reset();
  };

  return (
    <Card title="Create Campaign">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="mb-4 flex sm:flex-row flex-col gap-2 sm:items-center">
          <label htmlFor="name">Campaign Name</label>
          <input
            id="name"
            {...register('name')}
            className="border-1 border-slate-500 rounded-sm p-2"
            placeholder="e.g., Spring Promo"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>
        <button
          type="submit"
          disabled={create.isPending}
          className="bg-black text-white p-2 rounded-sm"
        >
          Create
        </button>
      </form>
    </Card>
  );
}

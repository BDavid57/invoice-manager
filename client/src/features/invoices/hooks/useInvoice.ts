import { useQuery } from '@tanstack/react-query';
import { api } from '../../../api';

export const useInvoice = (id?: number) =>
  useQuery({
    enabled: !!id,
    queryKey: ['invoice', id],
    queryFn: async () => (await api.get(`/invoices/${id}`)).data,
  });

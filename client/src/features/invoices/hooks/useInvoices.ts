import { useQuery } from '@tanstack/react-query';
import { api } from '../../../api';
import type { PaginatedInvoices } from '../types';

export const useInvoices = (page = 1, limit = 10) =>
  useQuery<PaginatedInvoices>({
    queryKey: ['invoices', page, limit],
    queryFn: async () => {
      const { data } = await api.get(
        `/invoices?page=${page}&limit=${limit}`,
      );
      return data;
    },
  });

export type Invoice = {
  id: number;
  vendorName: string;
  amount: number;
  dueDate: string;
  description?: string | null;
  paid: boolean;
  userId: number;
}

export type PaginationMeta = {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export type PaginatedInvoices = {
  data: Invoice[];
  meta: PaginationMeta;
}

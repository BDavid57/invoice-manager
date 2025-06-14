import { useState } from 'react';
import { useInvoices } from '../../features';
import { PageHeader, PaginationControls } from '../../components';
import { InvoicesList } from './invoices-list';

export const InvoicesPage = () => {
  const [page, setPage] = useState(1);
  const limit = 5;

  const { data: invoicesResponse, isLoading, error, isFetching } =
    useInvoices(page, limit);

  const invoices = invoicesResponse?.data ?? [];
  const meta = invoicesResponse?.meta;

  if (isLoading) return <p className="p-4">Loading…</p>;
  if (error) return <p className="p-4 text-red-500">Error loading invoices</p>;

  return (
    <div className="p-6">
      <PageHeader title={'Invoices'} />

      <InvoicesList invoices={invoices} />

      {meta && (
        <PaginationControls
          meta={meta}
          isFetching={isFetching}
          onChange={setPage}
        />
      )}
    </div>
  );
};

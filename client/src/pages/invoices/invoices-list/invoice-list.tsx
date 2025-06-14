import { memo } from 'react';
import type { Invoice } from '../../../features';
import { InvoiceRow } from '../../../components';

type Props = {
  invoices: Invoice[];
}

function InvoicesListBase({ invoices }: Props) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full table-auto border border-gray-300">
        <thead>
          <tr className="bg-blue-500 text-white">
            <th className="p-3 border">Date</th>
            <th className="p-3 border">Vendor</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Due</th>
            <th className="p-3 border">Amount</th>
            <th className="p-3 border">Status</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((inv, idx) => (
            <InvoiceRow key={inv.id} invoice={inv} idx={idx} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export const InvoicesList = memo(InvoicesListBase);

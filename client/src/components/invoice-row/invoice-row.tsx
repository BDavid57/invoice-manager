import { useState, memo, Fragment } from 'react';
import { createPortal } from 'react-dom';
import type { Invoice } from '../../features';
import { InvoiceModal } from '../invoice-modal';

type Props = {
  invoice: Invoice;
  idx: number;
}

function InvoiceRowBase({ invoice, idx }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Fragment>
      <tr
        onClick={() => setIsOpen(true)}
        className={`border cursor-pointer hover:bg-gray-100 ${
          idx % 2 ? 'bg-gray-50' : 'bg-white'
        }`}
      >
        <td className="p-3 border">
          {new Date(invoice.dueDate).toLocaleDateString()}
        </td>
        <td className="p-3 border">{invoice.vendorName}</td>
        <td className="p-3 border">{invoice.description ?? '—'}</td>
        <td className="p-3 border">
          {new Date(invoice.dueDate).toLocaleDateString()}
        </td>
        <td className="p-3 border">${invoice.amount}</td>
        <td className="p-3 border text-blue-600">
          {invoice.paid ? 'Paid' : 'Open'}
        </td>
      </tr>

      {isOpen &&
        createPortal(
          <InvoiceModal
            id={invoice.id}
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
          />,
          document.body,
        )}
    </Fragment>
  );
}

export const InvoiceRow = memo(InvoiceRowBase);

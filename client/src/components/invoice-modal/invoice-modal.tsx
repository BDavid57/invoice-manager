import { useInvoice } from '../../features';

type Props = {
  id: number;
  isOpen: boolean;
  onClose: () => void;
}

export const InvoiceModal = ({ id, isOpen, onClose }: Props) => {
  const { data: inv, isLoading } = useInvoice(id);

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/40 z-40"
        onClick={onClose}
      />

      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-xl">
          <h2 className="text-xl font-bold mb-4">
            Invoice #{inv?.id ?? ''}
          </h2>

          {isLoading ? (
            <p>Loading…</p>
          ) : (
            <div className="space-y-2">
              <p><span className="font-medium">Vendor:</span> {inv.vendorName}</p>
              <p><span className="font-medium">Description:</span> {inv.description || '—'}</p>
              <p><span className="font-medium">Due Date:</span> {new Date(inv.dueDate).toLocaleDateString()}</p>
              <p><span className="font-medium">Amount:</span> ${inv.amount}</p>
              <p><span className="font-medium">Status:</span> {inv.paid ? 'Paid' : 'Open'}</p>
            </div>
          )}

          <button
            onClick={onClose}
            className="mt-6 w-full rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
}

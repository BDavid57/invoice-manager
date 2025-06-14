type PaginationMeta = {
  page: number;
  totalPages: number;
}

type Props = {
  meta: PaginationMeta;
  isFetching?: boolean;
  onChange: (nextPage: number) => void;
}

export const PaginationControls = ({
  meta,
  isFetching = false,
  onChange,
}: Props) => {
  const { page, totalPages } = meta;

  return (
    <div className="flex items-center justify-between mt-4">
      <button
        onClick={() => onChange(page - 1)}
        disabled={page === 1}
        className="bg-blue-500 text-white px-3 py-2 rounded disabled:opacity-50"
      >
        Prev
      </button>

      <span className="text-gray-700">
        Page {page} of {totalPages}{' '}
        {isFetching && <span className="text-sm">(updating…)</span>}
      </span>

      <button
        onClick={() => onChange(page + 1)}
        disabled={page >= totalPages}
        className="bg-blue-500 text-white px-3 py-2 rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}

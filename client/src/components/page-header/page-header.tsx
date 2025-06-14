import { memo } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { type AppDispatch, logout } from '../../state';

type Props = {
  title: string;
}

function PageHeaderBase({ title }: Props) {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <div className="flex justify-between items-center mb-4">
      <h1 className="text-2xl font-bold">{title}</h1>
      <button
        onClick={handleLogout}
        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
      >
        Logout
      </button>
    </div>
  );
}

export const PageHeader = memo(PageHeaderBase);

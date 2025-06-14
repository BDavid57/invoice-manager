import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { type AppDispatch, type RootState, login } from '../../state';
import { type LoginForm, LoginSchema } from '../../validation';

export const LoginPage = () => {
  const [form, setForm] = useState<LoginForm>({ email: '', password: '' });
  const [formError, setFormError] = useState<string | null>(null);

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { loading, error } = useSelector((s: RootState) => s.auth);

  const update = (key: keyof LoginForm) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [key]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const parse = LoginSchema.safeParse(form);
    if (!parse.success) {
      const firstErr = Object.values(parse.error.flatten().fieldErrors)[0]?.[0];
      setFormError(firstErr ?? 'Invalid input');
      return;
    }

    setFormError(null);

    dispatch(login(parse.data))
      .unwrap()
      .then(() => navigate('/invoices'));
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Login</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="w-full border p-2 rounded"
          placeholder="Email"
          value={form.email}
          onChange={update('email')}
        />
        <input
          className="w-full border p-2 rounded"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={update('password')}
        />

        {formError && <p className="text-red-500">{formError}</p>}
        {error && <p className="text-red-500">{error}</p>}

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded w-full"
          disabled={loading}
        >
          {loading ? 'Logging in…' : 'Login'}
        </button>
      </form>
    </div>
  );
}

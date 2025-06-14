import { createSlice, createAsyncThunk, type PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import storage from 'redux-persist/lib/storage';

export const login = createAsyncThunk(
  'auth/login',
  async (
    { email, password }: { email: string; password: string },
    thunkAPI,
  ) => {
    const { data } = await axios.post(
      'http://localhost:3000/auth/login',
      { email, password },
    );
    return data.access_token as string;
  },
);

type AuthState = {
  token: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = { token: null, loading: false, error: null };

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.token = null;
      storage.removeItem('persist:root');
    },
  },
  extraReducers: (b) => {
    b.addCase(login.pending, (s) => { s.loading = true; s.error = null; });
    b.addCase(login.fulfilled, (s, a: PayloadAction<string>) => {
      s.loading = false;
      s.token = a.payload;
    });
    b.addCase(login.rejected, (s, a) => {
      s.loading = false;
      s.error = a.error.message ?? 'Login failed';
    });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;

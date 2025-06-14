import { z } from 'zod';

export const LoginSchema = z.object({
  email: z.string().email('Invalid e-mail address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

export type LoginForm = z.infer<typeof LoginSchema>;

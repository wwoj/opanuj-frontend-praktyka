import type { User } from '../model/User';
import {
  createQuery,
  createMutation,
  useQueryClient,
} from '@tanstack/svelte-query';

const USERS_QUERY_KEY = ['users'];
export function useUsers() {
  return createQuery<User[]>({
    queryKey: USERS_QUERY_KEY,
    queryFn: async () => {
      const response = await fetch('http://localhost:3000/api/data/users');
      if (!response.ok) throw new Error('Failed to fetch users');
      return response.json();
    },
  });
}

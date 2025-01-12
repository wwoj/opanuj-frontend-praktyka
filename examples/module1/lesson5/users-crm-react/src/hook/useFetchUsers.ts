import { useEffect, useState } from 'react';

import type { User } from '../type/User';

const useFetchUsers = (todo1: number) => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log('fetch users');
  }, [todo1]);

  return {
    users,
    isLoading,
    error,
  };
};

export default useFetchUsers;

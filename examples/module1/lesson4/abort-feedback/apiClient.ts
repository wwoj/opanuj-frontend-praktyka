import axios from 'axios';
import { useEffect, useState } from 'react';
const API_URL = '/api/data/users?timeout=10000';

interface User {
  id: number;
  name: string;
}
export function useUsersClient() {
  const [users, setUsers] = useState<User[]>([]);
  const [timerError, setTimerError] = useState<boolean>(false);

  function fetchUsers() {
    axios
      .get<User[]>(API_URL, { timeout: 5000 })
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        if (error.code === 'ECONNABORTED') {
          setTimerError(true);
        }
      });
  }

  function retryRequest() {
    setTimerError(false);
    fetchUsers();
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return { users, timerError, retryRequest };
}

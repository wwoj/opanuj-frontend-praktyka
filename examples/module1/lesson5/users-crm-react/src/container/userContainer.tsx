import { createContext, useEffect, useState } from 'react';
import type { User } from '../model/User';

type UserContextType = {
  users: User[];
};

export const UserContext = createContext<UserContextType>({
  users: [],
});
const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('http://localhost:3000/api/data/users');

      if (!response.ok) throw new Error('Failed to fetch users');

      const data = await response.json();
      setUsers(data);
      console.log('Users fetched:', data);
    };
    fetchUsers();
  }, []);

  return (
    <UserContext.Provider value={{ users }}>{children}</UserContext.Provider>
  );
};

export default UserProvider;

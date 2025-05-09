import { createContext, useEffect, useState } from 'react';
import type { User } from '../model/User';

type UserContextType = {
  users: User[];
  isLoading: boolean;
  error: string | null;
  isAdding: boolean;
  addUser: (user: User) => void;
};

export const UserContext = createContext<UserContextType>(
  {} as UserContextType
);
const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAdding, setIsAdding] = useState(false); // initial fetch
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('http://localhost:3000/api/data/users');

      if (!response.ok) throw new Error('Failed to fetch users');

      const data = await response.json();
      setUsers(data);
      setLoading(false);
      console.log('Users fetched:', data);
    };
    fetchUsers();
  }, []);

  const addUser = async (user: User) => {
    setIsAdding(true);
    setUsers((prevUsers) => [...prevUsers, user]);
    try {
      const response = await fetch('http://localhost:3000/api/data/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (!response.ok) throw new Error('Failed to add user');
    } catch (e) {
      console.error(e);
      return;
    }
    // Simulate a delay for adding user
    console.log('User added:', user);
  };

  return (
    <UserContext.Provider
      value={{
        users,
        isLoading: loading,
        isAdding: isAdding,
        error: null,
        addUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

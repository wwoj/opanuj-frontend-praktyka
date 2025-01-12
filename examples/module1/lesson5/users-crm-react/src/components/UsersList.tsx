import { useState, useEffect } from 'react';
import type { User } from '../model/User';
import { getStatusColor } from '../utils/statusColors';

const UsersList = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchUsers = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/data/users');
      // if (!response.ok) throw new Error('Failed to fetch users');
      const data = await response.json();
      console.log('todo');
      setUsers(data);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) return <div>Loading users...</div>;
  if (error) return <div>Error: {error}</div>;

  return <div className="grid gap-4" data-testid="users-list"></div>;
};

export default UsersList;

import { useMemo, useContext } from 'react';
import type { User } from '../model/User';
import { getStatusColor } from '../utils/statusColors';
import { UserContext } from '../context/userContext';

const StatusStats = () => {
  const data = useContext(UserContext);

  const statusCounts = useMemo(() => {
    return data.users.reduce((acc: Record<string, number>, user: User) => {
      acc[user.status] = (acc[user.status] || 0) + 1;
      return acc;
    }, {});
  }, [data.users]);

  if (data.isLoading) return <div>Loading users...</div>;
  if (data.error) return <div>Error: {data.error}</div>;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
      {Object.entries(statusCounts).map(([status, count]) => (
        <div
          key={status}
          className="bg-white rounded-lg shadow p-4"
          data-testid="status-stats-item"
        >
          <div className="flex flex-col items-center">
            <span
              className={`px-2 py-1 rounded-lg text-sm font-medium mb-2 ${getStatusColor(
                status
              )}`}
            >
              {status}
            </span>
            <span className="text-2xl font-bold">{count}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatusStats;

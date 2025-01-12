import React, { useEffect, useState } from 'react';

import type { User } from '../type/User';

import useFetchUsers from '../hook/useFetchUsers';
export function UserContainer() {
  const [users, setUsers] = useState<User[]>([]);

  // const USER_LIST = useFetchUsers();
  useEffect(() => {
    console.log('TEST !@#');
  }, []);
  return (
    <div>
      <h1>List!</h1>
    </div>
  );
}

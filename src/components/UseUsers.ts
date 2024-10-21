import { useState } from 'react';

export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}


export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);

  const addUser = (user: User) => {
    setUsers((prev) => [...prev, user]);
  };

  const editUser = (updatedUser: User) => {
    setUsers((prev) =>
      prev.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    );
  };

  const deleteUser = (userId: number) => {
    setUsers((prev) => prev.filter((user) => user.id !== userId));
  };

  return { users, addUser, editUser, deleteUser };
};



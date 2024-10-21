import React, { useState } from 'react';
import { User } from './UseUsers';
import { Button, TextField } from '@mui/material';

interface UserFormProps {
  addUser: (user: User) => void;
}

export const UserForm: React.FC<UserFormProps> = ({ addUser }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newUser: User = {
      id: Date.now(), 
      name,
      email,
      phone,
    };
    addUser(newUser);
    setName('');
    setEmail('');
    setPhone('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField label="Name"  value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <TextField label="Email" value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <TextField
        label="Phone" value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <Button type="submit">Add User</Button>
    </form>
  );
};



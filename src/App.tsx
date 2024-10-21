import React from 'react';

import { Container } from '@mui/material';
import { UserList } from './components/UserList';

export const App: React.FC = () => {
  return (
    <Container>
      <h1>User List</h1>
      <UserList />
    </Container>
  );
};



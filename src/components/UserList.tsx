import React, { useEffect } from 'react';
import { Card, CardContent, Typography, Button, Grid } from '@mui/material';
import {UserForm} from './UserForm';
import {useUsers} from './UseUsers';

export const UserList: React.FC = () => {
  const { users, addUser, editUser, deleteUser } = useUsers();

  useEffect(() => {
    const fetchData = async () => {
        const response = await fetch('https://mocki.io/v1/a6a0fb6b-a84a-4934-b3f2-5c92cc77c44e');
        const data = await response.json();
        console.log(data); 
        data.forEach((user: { id: number; name: string; email: string; phone: string }) => addUser(user));
      };
 fetchData();
  }, [addUser]);

  return (
    <div>
      <UserForm addUser={addUser} />
      <Grid container spacing={2}>
        {users.map(user => (
          <Grid item xs={12} sm={6} md={4} key={user.id}>
        <Card>
          <CardContent>
                <Typography variant="h6">{user.name}</Typography>
                <Typography color="textSecondary">{user.email}</Typography>
                <Typography color="textSecondary">{user.phone}</Typography>
                <Button onClick={() => editUser(user)}>Edit</Button>
                <Button onClick={() => deleteUser(user.id)}>Delete</Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};



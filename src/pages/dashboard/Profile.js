import { Button, Card, CardActions, CardContent, CardMedia, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import useAuth from '../../hooks/useAuth';

const Profile = () => {
    const { user } = useAuth();
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={3}>
             </Grid>
                <Grid item xs={12} sm={6}>
                    <Card variant="outlined" sx={{ maxWidth: 450 }}>
                    <CardContent>
                    <CardMedia
                    component="img"
                    height="340"
                    image={ user.photoURL}
                    alt="profile image"
                />
                <Typography variant="h5" gutterBottom>Name : 
                    {
                        user?.email ? <>{user.displayName}</> : ""
                    }
                </Typography>
                <Typography variant="h6" component="div">Email : 
                    {
                        user?.email ? <>{user.email}</> : ""
                    }
                </Typography>
                <Stack direction="row" pt={2} sx={{ justifyContent: 'space-between' }}>
                    <Button size="small">Edit Profile</Button>
                    <Button size="small">Delete Profile</Button>
                </Stack>
                </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} sm={3}>
            </Grid>
        </Grid>
    );
};

export default Profile;
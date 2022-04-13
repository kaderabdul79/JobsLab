import { Grid, Container, Typography, TextField, Button, CircularProgress, Alert, Stack } from '@mui/material';
import React, { useState } from 'react';
import register from '../images/register.png'
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { usingGoogleSignin, user, loginUser, isLoading, authError } = useAuth();

    const location = useLocation();
    const navigate = useNavigate();

    // handle login button when user'll login using google
    const handleGoogleSignIn = () => {
        usingGoogleSignin(location, navigate)
    }

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        // loginUser(loginData.email, loginData.password, location, navigate);
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>Login</Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            onChange={handleOnChange}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Password"
                            type="password"
                            name="password"
                            onChange={handleOnChange}
                            variant="standard" />
                        <Stack direction="row">
                            <Button sx={{ width: '30%', m: 1 }} type="submit" variant="contained">Login</Button>
                            <Button  sx={{ width: '40%', m: 1 }} onClick={handleGoogleSignIn} variant="contained">Login with Google</Button>
                        </Stack>
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/register">
                            <Button variant="text">New User? Please Register</Button>
                        </NavLink>
                        {isLoading && <CircularProgress />}
                    </form>
                    
                        {user?.email && <Alert severity="success">Login successfully!</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={register} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;
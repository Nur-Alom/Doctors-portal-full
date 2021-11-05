import React, { useState } from 'react';
import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import login from '../../../images/login.png';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { user, loginUser, loading, authError } = useAuth
    const [loginData, setLoginData] = useState({});
    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = (e) => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    };

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom> Login </Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            name="email"
                            onChange={handleOnChange}
                            label="Your Email"
                            type="email"
                            id="standard-basic"
                            variant="standard" />
                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            name="password"
                            onChange={handleOnChange}
                            label="Your Password"
                            type="password"
                            id="standard-basic"
                            variant="standard" />
                        <Button sx={{ width: "75%", m: 1 }} type="submit" variant="outlined">Login</Button>
                        <NavLink
                            style={{ textDecoration: "none", bg: "white" }}
                            to="/register">
                            <Button variant="text">New User? Please Register..</Button>
                        </NavLink>
                        {loading && <CircularProgress />}
                        {user?.email && <Alert severity="success">User Created Successfully</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}
                    </form>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: "100%" }} src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;
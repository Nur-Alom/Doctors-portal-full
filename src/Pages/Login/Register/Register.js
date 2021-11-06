import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import login from '../../../images/login.png';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const { user, registerNewUser, loading, authError } = useAuth({});
    const history = useHistory();
    const [loginData, setLoginData] = useState({});

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your Password Did nor match')
            e.preventDefault();
            return
        }
        registerNewUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>
                        Register
                    </Typography>
                    {<form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            name="name"
                            onBlur={handleOnBlur}
                            label="Your Name"
                            id="standard-basic"
                            variant="standard" />
                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            name="email"
                            onBlur={handleOnBlur}
                            label="Your Email"
                            type="email"
                            id="standard-basic"
                            variant="standard" />
                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            name="password"
                            onBlur={handleOnBlur}
                            label="Your Password"
                            type="password"
                            id="standard-basic"
                            variant="standard" />
                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            name="password2"
                            onBlur={handleOnBlur}
                            label="Confirm Password"
                            type="password"
                            id="standard-basic"
                            variant="standard" />
                        <Button sx={{ width: "75%", m: 1 }} type="submit" variant="outlined">Register</Button>
                        <NavLink
                            style={{ textDecoration: "none", bg: "white" }}
                            to="/login">
                            <Button variant="text">Already Registered? Please Login</Button>
                        </NavLink>
                    </form>}
                    {loading && <CircularProgress />}
                    {user?.email && <Alert severity="success">User Created Successfully</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: "100%" }} src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;
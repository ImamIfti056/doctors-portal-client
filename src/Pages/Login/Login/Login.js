import { Button, Container, Grid, Typography, Alert } from '@mui/material';
import TextField from '@mui/material/TextField';
import React, {useState} from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import loginImg from '../../../images/login.png';
import useAuth from '../../../hooks/useAuth';
import CircularProgress from '@mui/material/CircularProgress';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const {user, loginUser, isLoading, authError, googleSignIn} = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }


    const handleLoginSubmit = e => {
        e.preventDefault();
        loginUser(loginData.email, loginData.password, location, navigate);
    }

    return (
        <Container sx={{mt: 5}}>
            <Grid container>
                <Grid xs={12} sm={6} md={5} sx={{width: '100%',m: 'auto'}}>
                    <Typography variant='h4' sx={{color: 'info.main', fontWeight: 500}}>
                        LOGIN
                    </Typography>
                    {!isLoading && <form onSubmit={handleLoginSubmit}>
                    <TextField
                        sx={{width: '80%', m: 1}}
                        id="standard-search"
                        label="Email"
                        type="email"
                        name="email"
                        onChange={handleOnChange}
                        variant="standard"
                        required
                    />
                    <TextField
                        sx={{width: '80%', m:1}}
                        id="standard-password-input"
                        label="Password"
                        type="password"
                        name="password"
                        onChange={handleOnChange}
                        autoComplete="current-password"
                        variant="standard"
                        required
                    />
                    <Button type='submit' variant='contained' sx={{width: '80%', m:1}}>Login</Button>
                    <Button onClick={googleSignIn} variant='contained' sx={{width: '80%', m:1, mb: 2}}>Continue with Google</Button>
                    <NavLink to='/register'style={{textDecoration:'none'}}><Button variant='text'>New user? Please Register</Button></NavLink>
                    </form>}
                    {isLoading && <CircularProgress/>}
                    {user?.email && <Alert severity="success">Login Successful!</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                    {user.email && <NavLink to='/' style={{textDecoration:'none'}}><Button variant='contained'>Go to Home</Button></NavLink>}
                </Grid>
                <Grid xs={12} sm={6} md={7}>
                    <img src={loginImg} style={{width: '70%'}} alt='login-img'/>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;
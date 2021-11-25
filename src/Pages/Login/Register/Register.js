import { Button, Container, Grid, Typography, Alert } from '@mui/material';
import TextField from '@mui/material/TextField';
import React, {useState} from 'react';
import loginImg from '../../../images/login.png';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import CircularProgress from '@mui/material/CircularProgress';


const Register = () => {
    const [loginData, setLoginData] = useState({});
    
    const {user, registerUser, isLoading, authError} = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
        console.log(loginData);
    }

    const handleRegisterSubmit = e => {
        e.preventDefault();        
        if(loginData.password !== loginData.password2){
            alert('Your password did not match')
            return;
        }
        registerUser(loginData.email, loginData.password, loginData.name);        
    }

    return (
        <Container sx={{mt: 5}}>
            <Grid container>
                <Grid xs={12} sm={6} md={5} sx={{width: '100%',m: 'auto'}}>
                    <Typography variant='h4' sx={{color: 'info.main', fontWeight: 500}}>
                        REGISTER
                    </Typography>
                    { !isLoading && <form onSubmit={handleRegisterSubmit}>
                    <TextField
                        sx={{width: '80%', m: 1}}
                        id="standard-search"
                        label="Name"
                        type="text"
                        name="name"
                        onBlur={handleOnBlur}
                        variant="standard"
                        required
                    />
                    <TextField
                        sx={{width: '80%', m: 1}}
                        id="standard-search"
                        label="Email"
                        type="email"
                        name="email"
                        onBlur={handleOnBlur}
                        variant="standard"
                        required
                    />
                    <TextField
                        sx={{width: '80%', m:1}}
                        id="standard-password-input"
                        label="Password"
                        type="password"
                        name="password"
                        onBlur={handleOnBlur}
                        autoComplete="current-password"
                        variant="standard"
                        required
                    />
                    <TextField
                        sx={{width: '80%', m:1}}
                        id="standard-password-input"
                        label="ReType Password"
                        type="password"
                        name="password2"
                        onBlur={handleOnBlur}
                        autoComplete="current-password"
                        variant="standard"
                        required
                    />
                    <Button type='submit' variant='contained' sx={{width: '80%', m:1, my: 2}}>Register</Button>
                    <NavLink to='/login' style={{textDecoration:'none'}}><Button variant='text'>Already Registered? Login here.</Button></NavLink>
                    </form>}
                    {isLoading && <CircularProgress/>}
                    {user?.email && <Alert severity="success">Registration Successful!</Alert>}
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

export default Register;
import { Button, Container, Grid, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import loginImg from '../../../images/login.png';

const Login = () => {
    const [loginData, setLoginData] = useState({});

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }


    const handleLoginSubmit = e => {
        e.preventDefault();
        alert('subml')
    }

    return (
        <Container sx={{mt: 5}}>
            <Grid container>
                <Grid xs={12} sm={6} md={5} sx={{width: '100%',m: 'auto'}}>
                    <Typography variant='h4' sx={{color: 'info.main', fontWeight: 500}}>
                        LOGIN
                    </Typography>
                    <form onSubmit={handleLoginSubmit}>
                    <TextField
                        sx={{width: '80%', m: 1}}
                        id="standard-search"
                        label="Email"
                        type="email"
                        name="email"
                        onChange={handleOnChange}
                        variant="standard"
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
                    />
                    <Button type='submit' variant='contained' sx={{width: '80%', m:1, my: 2}}>Login</Button>
                    <NavLink to='/register'style={{textDecoration:'none'}}><Button variant='text'>New user? Please Register</Button></NavLink>
                    </form>
                </Grid>
                <Grid xs={12} sm={6} md={7}>
                    <img src={loginImg} style={{width: '70%'}} alt='login-img'/>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;
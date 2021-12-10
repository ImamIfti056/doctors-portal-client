import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import { Button, Alert } from '@mui/material';
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const {token} = useAuth();

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleAdminSubmit = e => {
        e.preventDefault();
        const user = {email};
        fetch('https://frozen-reaches-40395.herokuapp.com/users/admin',{
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                setSuccess(true);
            }
        })

    }

    return (
        <div>
            <h2>Make Admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    sx={{width: '40%', m: 1}}
                    label="Email"
                    type="email"
                    name="email"
                    onBlur={handleOnBlur}
                    variant="standard"
                    required
                />
                <br/>
                <Button type='submit' variant='contained' sx={{width: '20%', m:1}}>Make Admin</Button>
            </form>
            {success && <Alert severity="success">Admin created Successfully!</Alert>}
        </div>
    );
};

export default MakeAdmin;
import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png';
import Calendar from '../../Shared/Calendar/Calendar';

const AppointmentHeader = ({date, setDate}) => {
    return (
        <Container sx={{mt: 4}}>
            <Grid container>
                <Grid item xs={12} md={6}>
                   <Calendar date={date} setDate={setDate}></Calendar> 
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{width: '100%'}} src={chair} alt='chair-img' />
                </Grid>
            </Grid>
        </Container>
    );
};

export default AppointmentHeader;
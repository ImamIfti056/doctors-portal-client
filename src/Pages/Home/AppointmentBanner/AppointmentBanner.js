import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import bg from '../../../images/appointment-bg.png';
import doctor from '../../../images/doctor.png';

const appointmentBanner = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(45, 58, 74, 0.9)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: '100px',
}

const AppointmentBanner = () => {
    return (
        <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <img
            style={{width:400, marginTop: -110}}
            src={doctor} alt='appointment-doctior'/>
          </Grid>
          <Grid item xs={12} md={6}  sx={{
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                textAlign: 'left'
            }}>
            <Box>
            <Typography variant='h6' style={{color: '#5ce7ed', marginBottom: 20}}>
                Appointment
            </Typography>
            <Typography variant='h4' style={{color: 'white', marginBottom: 20}}>
                Make an Appointment Today
            </Typography>
            <Typography variant='h6' style={{color: 'white', fontSize: 14, fontWeight: 300, marginBottom: 20}}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br/> Iusto nihil iure tenetur, delectus laudantium dicta?
            </Typography>            
            <Button variant='contained' style={{backgroundColor: '#5ce7ed'}}>Learn More</Button>
            </Box>
            
          </Grid>
        </Grid>
      </Box>
    );
};

export default AppointmentBanner;
import React from 'react';
import Box from '@mui/material/Box';
import {Container} from '@mui/material';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';

const bannerBg = {
  background: `url(${bg}) no-repeat center center/cover`
}

const verticalCenter = {
  display: 'flex',
  height: 500,
  alignItems: 'center'
}

const Banner = () => {
    return (
      <Container sx={{ flexGrow: 1, marginTop: 2, height: '90vh' }} style={bannerBg}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} style={{textAlign: 'left', ...verticalCenter}}>
            <Box>
            <Typography variant='h3'>
              Your New Smile <br/>
              Starts Here
            </Typography>          
            <Typography variant='h6' sx={{fontSize: 13, fontWeight: 400, color: 'gray', margin: '15px 0'}}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br/> Iusto nihil iure tenetur, delectus laudantium dicta?
            </Typography>
            <Button variant='contained'>Get Appointment</Button>
            </Box>
          </Grid>

          <Grid item xs={12} md={6} style={verticalCenter}>
            <img src={chair} alt='banner-img'  style={{width: "500px"}}/>
          </Grid>
        </Grid>
      </Container>
    );
};

export default Banner;
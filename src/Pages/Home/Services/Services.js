import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';
import fluoride from '../../../images/fluoride.png';
import Typography from '@mui/material/Typography';
import Service from '../Service/Service';

const services = [
    {
        name: 'Cavity Filling',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto nihil iure tenetur, delectus laudantium dicta?',
        img: cavity
    },
    {
        name: 'Flouride Treatment',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto nihil iure tenetur, delectus laudantium dicta?',
        img: fluoride
    },
    {
        name: 'Teeth Whitening',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto nihil iure tenetur, delectus laudantium dicta?',
        img: whitening
    }
];

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
        <Container>
        <Typography sx={{ fontWeight: 500, m: 2,  color: 'success.main'}} variant="h6" component="div">
          OUR SERVICES
        </Typography>
        <Typography sx={{ fontWeight: 600, m: 4 }} variant="h4" component="div">
          SERVICES WE PROVIDE
        </Typography>
        <Grid container spacing={{ xs: 3, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {
              services.map(service => <Service
              key={service.name}
              service={service}
              ></Service>)
          }
        </Grid>
        </Container>
      </Box>
    );
}   
export default Services;
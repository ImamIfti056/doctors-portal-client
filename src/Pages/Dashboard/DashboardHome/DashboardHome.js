import * as React from 'react';
import Calendar from '../../Shared/Calendar/Calendar';
import Appointments from '../Appointments/Appointments';
import { Grid } from '@mui/material';

const DashboardHome = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <Grid container>
            <Grid xs={12} sm={5} md={5}>
                <Calendar
                date={date}
                setDate={setDate}
                ></Calendar>
            </Grid>
            <Grid xs={12} sm={7} md={7}>
                <Appointments
                date={date}
                ></Appointments>
            </Grid>
          </Grid>
    );
};

export default DashboardHome;
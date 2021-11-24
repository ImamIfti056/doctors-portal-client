import { Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({booking, date}) => {
    const {name, space, time} = booking;

    const [openBooking, setOpenBooking] = React.useState(false);
    const handleOpenBooking = () => setOpenBooking(true);
    const handleCloseBooking = () => setOpenBooking(false);

    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{ p: 4 }}>
                <Typography sx={{ color: 'info.main', fontWeight: 500 }} variant="h5" gutterBottom component="div">
                    {name}
                </Typography>
                <Typography variant="h6" gutterBottom component="div">
                    {time}
                </Typography>
                <Typography variant="caption" sx={{my: 2}} display="block" gutterBottom>
                    {space} SPACES AVAIABLE
                </Typography>
                <Button onClick={handleOpenBooking} variant="contained" >BOOK APPOINTMENT</Button>
            </Paper>
            </Grid>
            <BookingModal
            openBooking={openBooking}
            handleCloseBooking={handleCloseBooking}
            booking={booking}
            date={date}
            ></BookingModal>
        </>
    );
};

export default Booking;
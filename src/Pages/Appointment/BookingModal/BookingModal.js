import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const BookingModal = ({openBooking, handleCloseBooking, booking, date}) => {

    const {name, time} = booking;

    const handleBookingSubmit = (e) => {
        alert('submitting');
        e.preventDefault();
        handleCloseBooking();
    }

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={openBooking}
                onClose={handleCloseBooking}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
            >
            <Fade in={openBooking}>
                <Box sx={style}>
                    <Typography sx={{textAlign: 'center', color: 'info.main', fontWeight: 500}} id="transition-modal-title" variant="h5" component="h2">
                        {name}
                    </Typography>
                    <form onSubmit={handleBookingSubmit}>
                    <TextField sx={{width: '90%', m:1}}
                        disabled
                        id="standard-search"
                        label={time}
                        type="text"
                        variant="standard"
                    />
                    <TextField sx={{width: '90%', m:1}}
                        id="standard-search"
                        label='Your Name'
                        type="text"
                        variant="standard"
                    />
                    <TextField sx={{width: '90%', m:1}}
                        id="standard-search"
                        label='Your Email'
                        type="email"
                        variant="standard"
                    />
                    <TextField sx={{width: '90%', m:1}}
                        id="standard-search"
                        label='Phone'
                        type="number"
                        variant="standard"
                    />
                    <TextField sx={{width: '90%', m:1}}
                        disabled
                        id="standard-search"
                        label={date.toDateString()}
                        type="number"
                        variant="standard"
                    />
                    <Button sx={{mt: 2, ml: '70%'}} type='submit' variant='contained'>Submit</Button>
                    </form>
                </Box>
            </Fade>
            </Modal>
        </div>
    );
};

export default BookingModal;
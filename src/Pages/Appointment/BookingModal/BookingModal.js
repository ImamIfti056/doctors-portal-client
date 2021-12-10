import React, {useState} from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import useAuth from '../../../hooks/useAuth';

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

const BookingModal = ({openBooking, handleCloseBooking, booking, date, setBookingSuccess}) => {
    const {name, time} = booking;
    const {user} = useAuth();
    
    const initialBookingInfo = {patientName: user.displayName, email: user.email, phone: ''};
    const [bookingInfo, setBookingInfo] = useState(initialBookingInfo);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newBookingInfo = {...bookingInfo};
        newBookingInfo[field] = value;
        setBookingInfo(newBookingInfo)
    }

    const handleBookingSubmit = (e) => {
        // Collecting Data
        const appointment = {
            ...bookingInfo,
            time,
            serviceName: name,
            date: date.toLocaleDateString()
        }
        // Sending data to the server
        fetch('https://frozen-reaches-40395.herokuapp.com/appointment', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(appointment)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                handleCloseBooking();
                setBookingSuccess(true);
            }
        });
        e.preventDefault();
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
                        name="patientName"
                        onBlur={handleOnBlur}
                        defaultValue={user.displayName}
                    />
                    <TextField sx={{width: '90%', m:1}}
                        id="standard-search"
                        label='Your Email'
                        type="email"
                        variant="standard"
                        name="email"
                        onBlur={handleOnBlur}
                        defaultValue={user.email}
                    />
                    <TextField sx={{width: '90%', m:1}}
                        id="standard-search"
                        label='Phone'
                        name="phone"
                        type="number"
                        onBlur={handleOnBlur}
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
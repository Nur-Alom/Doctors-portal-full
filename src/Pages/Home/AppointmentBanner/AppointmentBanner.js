import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png';
import bg from '../../../images/appointment-bg.png';
import { Button, Typography } from '@mui/material';

const appointmentBanner = {
    background: `url(${bg})`,
    backgroundColor: "rgba(45,58,74,0.5)",
    backgroundBlendMode: "darken, luminosity",
    marginTop: 175
}

const AppointmentBanner = () => {
    return (
        <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={6} md={6}>
                    <img style={{ width: 400, marginTop: '-110px', marginBottom: "-4px" }}
                        src={doctor} alt="" />
                </Grid>
                <Grid item xs={6} md={5} sx={{ display: "flex", justifyContent: 'flex-start', textAlign: "left", alignItems: 'center' }}>
                    <Box>
                        <Typography variant="h6" sx={{ mb: 5 }} style={{ color: "#61ABF8" }}>
                            Appointment
                        </Typography>
                        <Typography variant="h4" sx={{ my: 5 }} style={{ color: "white" }}>
                            Make An Appointment Today
                        </Typography>
                        <Typography variant="h6" sx={{ my: 5 }} style={{ color: "white", fontSize: 14 }}>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error aut repellendus distinctio eligendi nostrum natus fuga ut possimus. Impedit, aliquam!
                        </Typography>
                        <Button variant="contained">Learn More</Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AppointmentBanner;
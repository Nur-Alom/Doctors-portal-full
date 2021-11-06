import React from 'react';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Typography, Container } from '@mui/material';

const bannerBG = {
    background: `url(${bg})`,
}

const verticalCenter = {
    display: "flex",
    alignItems: "center",
    height: 400
}

const Banner = () => {
    return (
        <Container style={bannerBG} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item style={{ ...verticalCenter, textAlign: "left" }} xs={12} md={5}>
                    <Box>
                        <Typography variant="h3">
                            Your New Smile <br />
                            Dtarts Heare
                        </Typography>
                        <Typography variant="h6" sx={{ my: 3, fontSize: 13, color: "gray", fontWeight: 300 }}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum repellat cupiditate temporibus nisi. Porro, voluptatem ab aspernatur dolor magni obcaecati.
                        </Typography>
                        <Button
                            style={{ backgroundColor: '#5CE7ED' }} variant="contained">Get Appointment</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={verticalCenter} >
                    <img style={{ width: '450px', marginLeft: 'auto' }} src={chair} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Banner;
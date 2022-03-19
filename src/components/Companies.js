import { Container, Grid } from '@mui/material';
import React from 'react';

const Companies = () => {
    return (
        <Container maxWidth="md">
            <Grid container spacing={6} my={5}>
                <Grid item xs={3} md={2}>
                    <img src="/companyImages/google-original.svg" alt="" srcset="" />
                </Grid>
                <Grid item xs={3} md={2}>
                    <img src="/companyImages/fitbit-original.svg" alt="" srcset="" />
                </Grid>
                <Grid item xs={3} md={2}>
                    <img src="/companyImages/amazon-original.svg" alt="" srcset="" />
                </Grid>
                <Grid item xs={3} md={2}>
                    <img src="/companyImages/airbnb-original.svg" alt="" srcset="" />
                </Grid>
                <Grid item xs={3} md={2}>
                    <img src="/companyImages/netflix-original.svg" alt="" srcset="" />
                </Grid>
                <Grid item xs={3} md={2}>
                    <img src="/companyImages/paypal-original.svg" alt="" srcset="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Companies;
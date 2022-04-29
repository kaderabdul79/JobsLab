import { FeaturedVideoOutlined } from '@mui/icons-material';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';

const Candidates = () => {
    return (
        <Container maxWidth="lg" sx={{bgcolor: "#F7FAFF"}}>
        <Box bgcolor="#FFFFFF" boxShadow={2} p={5} borderRadius={3}>
            <Box textAlign="center">
                <Typography variant='h5'>Hiring? Candidates are working for you</Typography>
                <Typography variant='subtitle1'>We get thousands of job postings weekly, but only accept the openings at the top companies.</Typography>
            </Box>
            <Box>
              <Box my={3}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                    <Box textAlign="center">
                           <Typography variant='h2'>300+</Typography>
                        <Typography variant='subtitle1'>300 + component compositions, which will help you to build any page easily.</Typography>
                    </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                    <Box textAlign="center">
                        <Typography variant='h2'>45+</Typography>
                        <Typography variant='subtitle1'>45 + landing and supported pages to Build a professional website.</Typography>
                    </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                    <Box textAlign="center">
                        <Typography variant='h2'>99%</Typography>
                        <Typography variant='subtitle1'>99% of our customers rated 5-star our themes over 5 years.</Typography>
                    </Box>
                    </Grid>
                </Grid>
              </Box> 
              <Box textAlign="center">
                <Button variant="contained" sx={{marginRight:'20px'}}>Explore</Button>
                <Button startIcon={<FeaturedVideoOutlined />}>Watch The Video</Button>   
              </Box>    
            </Box>
        </Box>
        </Container>
    );
};

export default Candidates;
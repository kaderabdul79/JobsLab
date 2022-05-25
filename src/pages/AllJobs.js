import { AccessTime, ArrowRightAlt, LocationOn } from '@mui/icons-material';
import { Box, Button, Card, CardContent, Grid, Link, Paper, Typography, Container } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {jobsData} from '../dummyData';

const AllJobs = () => {
    let navigate = useNavigate();
    return (
        <Container maxWidth="lg">
        <Box>
            <Grid container spacing={3}  my={2}>
                {
                    jobsData.map((jobinfo)=>(
                        <Grid item xs={12} md={6} my={2}>
                        <Card sx={{borderRadius: '14px',":hover": { borderRight: '5px solid #46DBC9'} }}>
                            <CardContent>
                                <Typography sx={{ my: 1.5 }} variant="h5">Position: {jobinfo.title}</Typography>
                                <Typography>Description : <br/>{jobinfo.description}</Typography>
                                <Box sx={{display: 'flex',alignItems: 'center',gap:1,marginY:'5px'}}>
                                    <LocationOn  sx={{fontSize:'22px'}} />
                                    <Typography variant="body1">{jobinfo.joblocation}</Typography>
                                </Box>
                                <Box sx={{display: 'flex',alignItems: 'center',gap:1}}>
                                    <AccessTime sx={{fontSize:'22px'}} />
                                    <Typography variant="body1">{jobinfo.type} time</Typography>
                                </Box>
                                <Button size="lg" sx={{marginTop:'5px'}} variant='outlined' href={jobinfo.id} component={Link}>Apply For Job</Button>
                            </CardContent>
                        </Card>
                    </Grid>
                    ))
                }
            </Grid>

        </Box>
       </Container> 
    );
};                                                                                                                                      

export default AllJobs;
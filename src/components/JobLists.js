import { AccessTime, ArrowRightAlt, LocationOn } from '@mui/icons-material';
import { Box, Button, Card, CardContent, Grid, Link, Paper, Typography } from '@mui/material';
import React from 'react';

const JobLists = () => {
    return (
        <Box my={9}>

            <Typography mb={1} variant='h4'>Top developer jobs listed in our portal</Typography>
            <Typography variant='h6' component='span'>We get thousands of job postings weekly, but only accept the openings at the top companies.</Typography>
            <Link href="#" underline="none" variant="h6">Set career interests<ArrowRightAlt sx={{ '& .MuiSvgIcon-root':{fontSize: '20px'} }} /></Link>

            <Grid container spacing={3}  my={2}>
                <Grid item xs={6} md={4} my={2}>
                    <Card sx={{borderRadius: '14px',":hover": { borderRight: '5px solid #46DBC9'} }}>
                        <CardContent>
                            <Box sx={{bgcolor: 'red',display: 'inline-block',borderRadius: 1,padding: '5px',}} >
                                <Typography sx={{ fontSize: 14 }} color="#fff" gutterBottom>
                                Web design
                                </Typography>
                            </Box>
                            <Typography sx={{ my: 1.5 }} variant="h5"> Web designer internship</Typography>
                            <Box sx={{display: 'flex',alignItems: 'center',gap:1,marginBottom:'5px'}}>
                                <LocationOn  sx={{fontSize:'22px'}} />
                                <Typography variant="body1">Milan, Italy</Typography>
                            </Box>
                            <Box sx={{display: 'flex',alignItems: 'center',gap:1}}>
                                <AccessTime sx={{fontSize:'22px'}} />
                                <Typography variant="body1">Part time</Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>  
                <Grid item xs={6} md={4} my={2}>
                    <Card sx={{borderRadius: '14px',":hover": { borderRight: '5px solid #46DBC9'} }}>
                        <CardContent>
                            <Box sx={{bgcolor: 'red',display: 'inline-block',borderRadius: 1,padding: '5px',}} >
                                <Typography sx={{ fontSize: 14 }} color="#fff" gutterBottom>
                                Web design
                                </Typography>
                            </Box>
                            <Typography sx={{ my: 1.5 }} variant="h5"> Web designer internship</Typography>
                            <Box sx={{display: 'flex',alignItems: 'center',gap:1,marginBottom:'5px'}}>
                                <LocationOn  sx={{fontSize:'22px'}} />
                                <Typography variant="body1">Milan, Italy</Typography>
                            </Box>
                            <Box sx={{display: 'flex',alignItems: 'center',gap:1}}>
                                <AccessTime sx={{fontSize:'22px'}} />
                                <Typography variant="body1">Part time</Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid> 
                <Grid item xs={6} md={4} my={2}>
                    <Card sx={{borderRadius: '14px',":hover": { borderRight: '5px solid #46DBC9'} }}>
                        <CardContent>
                            <Box sx={{bgcolor: 'red',display: 'inline-block',borderRadius: 1,padding: '5px',}} >
                                <Typography sx={{ fontSize: 14 }} color="#fff" gutterBottom>
                                Web design
                                </Typography>
                            </Box>
                            <Typography sx={{ my: 1.5 }} variant="h5"> Web designer internship</Typography>
                            <Box sx={{display: 'flex',alignItems: 'center',gap:1,marginBottom:'5px'}}>
                                <LocationOn  sx={{fontSize:'22px'}} />
                                <Typography variant="body1">Milan, Italy</Typography>
                            </Box>
                            <Box sx={{display: 'flex',alignItems: 'center',gap:1}}>
                                <AccessTime sx={{fontSize:'22px'}} />
                                <Typography variant="body1">Part time</Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid> 
                <Grid item xs={6} md={4} my={2}>
                    <Card sx={{borderRadius: '14px',":hover": { borderRight: '5px solid #46DBC9'} }}>
                        <CardContent>
                            <Box sx={{bgcolor: 'red',display: 'inline-block',borderRadius: 1,padding: '5px',}} >
                                <Typography sx={{ fontSize: 14 }} color="#fff" gutterBottom>
                                Web design
                                </Typography>
                            </Box>
                            <Typography sx={{ my: 1.5 }} variant="h5"> Web designer internship</Typography>
                            <Box sx={{display: 'flex',alignItems: 'center',gap:1,marginBottom:'5px'}}>
                                <LocationOn  sx={{fontSize:'22px'}} />
                                <Typography variant="body1">Milan, Italy</Typography>
                            </Box>
                            <Box sx={{display: 'flex',alignItems: 'center',gap:1}}>
                                <AccessTime sx={{fontSize:'22px'}} />
                                <Typography variant="body1">Part time</Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid> 
                <Grid item xs={6} md={4} my={2}>
                    <Card sx={{borderRadius: '14px',":hover": { borderRight: '5px solid #46DBC9'} }}>
                        <CardContent>
                            <Box sx={{bgcolor: 'red',display: 'inline-block',borderRadius: 1,padding: '5px',}} >
                                <Typography sx={{ fontSize: 14 }} color="#fff" gutterBottom>
                                Web design
                                </Typography>
                            </Box>
                            <Typography sx={{ my: 1.5 }} variant="h5"> Web designer internship</Typography>
                            <Box sx={{display: 'flex',alignItems: 'center',gap:1,marginBottom:'5px'}}>
                                <LocationOn  sx={{fontSize:'22px'}} />
                                <Typography variant="body1">Milan, Italy</Typography>
                            </Box>
                            <Box sx={{display: 'flex',alignItems: 'center',gap:1}}>
                                <AccessTime sx={{fontSize:'22px'}} />
                                <Typography variant="body1">Part time</Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid> 
                <Grid item xs={6} md={4} my={2}>
                    <Card sx={{borderRadius: '14px',":hover": { borderRight: '5px solid #46DBC9'} }}>
                        <CardContent>
                            <Box sx={{bgcolor: 'red',display: 'inline-block',borderRadius: 1,padding: '5px',}} >
                                <Typography sx={{ fontSize: 14 }} color="#fff" gutterBottom>
                                Web design
                                </Typography>
                            </Box>
                            <Typography sx={{ my: 1.5 }} variant="h5"> Web designer internship</Typography>
                            <Box sx={{display: 'flex',alignItems: 'center',gap:1,marginBottom:'5px'}}>
                                <LocationOn  sx={{fontSize:'22px'}} />
                                <Typography variant="body1">Milan, Italy</Typography>
                            </Box>
                            <Box sx={{display: 'flex',alignItems: 'center',gap:1}}>
                                <AccessTime sx={{fontSize:'22px'}} />
                                <Typography variant="body1">Part time</Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid> 
                <Box component="div" sx={{marginX:'auto',marginY:5}}><Button size="large" endIcon={<ArrowRightAlt />} variant="contained" href="#viewall">View All</Button></Box>                                                                        
            </Grid>

        </Box>
    );
};                                                                                                                                      

export default JobLists;
import { AccessTime, ArrowRightAlt, LocationOn } from '@mui/icons-material';
import { Box, Button, Card, CardContent, Grid, Link, Paper, Typography, Container  } from '@mui/material';
import React, { useState } from 'react';

const Job = () => {
    const [jobs,setJobs] = useState({});
    const jobsData = [
        { id: 1, type:'part', categoryName: 'Web Developer', title: 'Web Developer', description: 'looking for react developer..',joblocation: 'Kuril',tags: 'react,laravel' },
        { id: 2, type:'full', categoryName: 'Software Developer', title: 'Software Developer', description: 'looking for php developer..',joblocation: 'Nikunja',tags: 'php,laravel' },
        { id: 3, type:'part', categoryName: 'Web Designer', title: 'Laravel Developer', description: 'looking for laravel developer..',joblocation: 'Uttara',tags: 'laravel' },
        { id: 4, type:'full', categoryName: 'Software Developerr', title: 'Java Developer', description: 'looking for Web developer..',joblocation: 'Kuril',tags: 'react,laravel' },
        { id: 5, type:'full', categoryName: 'Web Developer', title: 'Node Developer', description: 'looking for Java developer..',joblocation: 'Banani',tags: 'java' },
        { id: 6, type:'full', categoryName: 'Software Developer', title: 'php Developer', description: 'looking for Software developer..',joblocation: 'Gulsan',tags: 'react' },
        { id: 7, type:'part', categoryName: 'Web Developer', title: 'Web Developer', description: 'looking for Laravel developer..',joblocation: 'Kuril',tags: 'rlaravel' },
      ];
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
                                <Button size="lg" sx={{marginTop:'5px'}} variant='outlined'>Apply For Job</Button>
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

export default Job;
import { ArrowRightAlt, BorderColor, NoteOutlined, WorkOutlineOutlined } from '@mui/icons-material';
import { Avatar, Box, Button, Grid, Stack, Typography, Container } from '@mui/material';

const JobProcess = () => {
    return (
        <Container maxWidth="lg"sx={{marginY:7}}>
            <Box>
                <Stack alignItems="center">
                    <Typography component='span'sx={{color:'green'}}>PROCESS</Typography>
                    <Typography variant='h4'>Our process to find you a new job is fast</Typography>
                    <Typography textAlign="center" my={2} maxWidth="415px" variant='body1'>Fill out our standardized application on our platform. Most applicants finish in under an hour.</Typography>
                    <Button variant="contained" endIcon={<ArrowRightAlt />}>Start Searching</Button>
                </Stack>

                <Grid container spacing={6} my={2}>
                    <Grid item xs={6} md={4}>
                        <Avatar variant="square" sx={{ width: 66, height: 66, bgcolor: '#EBF2FF',color: '#46DBC9' }}>
                            <BorderColor />
                        </Avatar>
                        <Typography variant='h5' my={1}>Complete your application</Typography>
                        <Typography>Fill out our standardized application on our platform. Most applicants finish in under an hour.</Typography>
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <Avatar variant="square" sx={{ width: 66, height: 66, bgcolor: '#EBF2FF',color: '#46DBC9' }}>
                            <NoteOutlined/>
                        </Avatar>
                        <Typography variant='h5' my={1}>Select companies</Typography>
                        <Typography>We'll immediately match you with any relevant openings and you get to pick which ones you're interested in.</Typography>
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <Avatar variant="square" sx={{ width: 66, height: 66, bgcolor: '#EBF2FF',color: '#46DBC9' }}>
                            <WorkOutlineOutlined />
                        </Avatar>
                        <Typography variant='h5' my={1}>Choose your offer</Typography>
                        <Typography>After 3 days all of your offers will arrive and you will have another 7 days to select your new company.</Typography>
                    </Grid>
                </Grid>    
                
            </Box>
        </Container>
    );
};

export default JobProcess;
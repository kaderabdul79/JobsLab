import { Container, Grid, Box, Typography} from '@mui/material';

const Leads = () => {
    return (
        <Container maxWidth="lg">
            <Grid container spacing={2}>
                <Grid item xs={6} md={8} sx={{display:'flex',alignItems:'center'}}>
                    <Box>
                        <Typography variant='h3'>Easily find leads and customers</Typography>
                        <Typography my={3} variant='h6'>Send one-off and automated email, push, and in-app messages to people. Create better stories.</Typography>
                        <Typography my={3} variant='h6'>We get thousands of job postings weekly, but only accept the openings at the top companies. We get thousands of job postings weekly, but only accept the openings at the top companies.</Typography>
                    </Box>
                </Grid>
                <Grid item xs={6} md={4}>
                    <Box>
                        <img width="100%" height="500px" src='/lead.svg' alt="customerimg" />
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Leads;
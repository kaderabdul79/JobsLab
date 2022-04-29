import { FeaturedVideoOutlined } from '@mui/icons-material';
import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material';

const Hero = () => {
    return (
        <Container maxWidth="lg" sx={{bgcolor: "#F7FAFF"}}>
            <Grid container spacing={2}>
                <Grid item xs={6} md={8} sx={{display:'flex',alignItems:'center'}}>
                    <Box>
                        <Typography variant='h3'>Find the world’s best remote job</Typography>
                        <Typography my={3} variant='h6'>Productivity tools can either help you or get in the way.
                        TheFront aims to remove all barriers between you and just getting stuff done.</Typography>
                        <Stack display="inline">
                        <Button variant="contained" sx={{marginRight:'20px'}}>Explore</Button>
                        <Button startIcon={<FeaturedVideoOutlined />}>Watch The Video</Button>
                        </Stack>
                    </Box>
                </Grid>
                <Grid item xs={6} md={4}>
                    <Box>
                        <img width="100%" height="500px" src='/hero.svg' alt="heroimg" srcset="" />
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Hero;
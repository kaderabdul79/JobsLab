import { Container, Box, Typography, TextField, Stack, Button } from '@mui/material';
import React from 'react';

const NewsLetter = () => {
    return (
    <Container maxWidth="lg">
        <Box bgcolor="#377DFF" boxShadow={2} p={5} borderRadius={3}>
            <Box textAlign="center" color="#fff">
                <Typography variant='h4'>Subscribe to our newsletter</Typography>
                <Typography variant='h6'>Don't lose a chance to be among the firsts to know about our upcoming news and updates.</Typography>
                
            </Box>
            <Stack marginX="auto" direction="row" mt={5}  sx={{ justifyContent: 'space-between',width: '25%'}}>
                    <TextField placeholder='Enter your Email' type="enmail" fullWidth sx={{width: 400, maxWidth: '100%'}}></TextField>
                    <Button size="small" type="submit" variant="contained">Submit</Button>
            </Stack>
        </Box>
    </Container>    
    );
};

export default NewsLetter;
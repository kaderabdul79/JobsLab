import { MessageOutlined } from '@mui/icons-material';
import { Avatar, Box, Container, Grid, Stack, Typography } from '@mui/material';
import React from 'react';

const Testimonial = () => {
    return (
        <Container maxWidth="lg">
        <Box my={6}>
            <Box textAlign="center">
                <Typography variant='h4'>Take a look what our customers say</Typography>
                <Typography variant='subtitle1'>Take a quick glance at some of our past projects.<br />
                If you would like to see some more great work, get in touch with us to take a look at our private portfolio</Typography>
            </Box>
            <Box>
                <Grid container spacing={6} my={2}>
                    <Grid item xs={6} md={4}>
                    <Box sx={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                        <Avatar variant="square" sx={{ width: 66, height: 66, bgcolor: '#EBF2FF',color: '#46DBC9' }}>
                            <MessageOutlined />
                        </Avatar>
                        <Typography variant='h5' my={4}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>
                        <Stack direction="row" gap={3}>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                            <Box>
                                <Typography variant='subtitle1'>Clara Bertoletti</Typography>
                                <Typography variant='subtitle2'>MUI lover</Typography>
                            </Box>
                        </Stack>
                    </Box>
                    </Grid>
                    <Grid item xs={6} md={4}>
                    <Box sx={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                        <Avatar variant="square" sx={{ width: 66, height: 66, bgcolor: '#EBF2FF',color: '#46DBC9' }}>
                            <MessageOutlined />
                        </Avatar>
                        <Typography variant='h5' my={4}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>
                        <Stack direction="row" gap={3}>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                            <Box>
                                <Typography variant='subtitle1'>Clara Bertoletti</Typography>
                                <Typography variant='subtitle2'>MUI lover</Typography>
                            </Box>
                        </Stack>
                    </Box>
                    </Grid>
                    <Grid item xs={6} md={4}>
                    <Box sx={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                        <Avatar variant="square" sx={{ width: 66, height: 66, bgcolor: '#EBF2FF',color: '#46DBC9' }}>
                            <MessageOutlined />
                        </Avatar>
                        <Typography variant='h5' my={4}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>
                        <Stack direction="row" gap={3}>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                            <Box>
                                <Typography variant='subtitle1'>Clara Bertoletti</Typography>
                                <Typography variant='subtitle2'>MUI lover</Typography>
                            </Box>
                        </Stack>
                    </Box>
                    </Grid>
                </Grid>        
            </Box>
        </Box>
        </Container> 
    );
};

export default Testimonial;
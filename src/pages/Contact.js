import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const Contact = () => {
    const [contactData,setContactData] = useState({})
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        // console.log(value);
    }
    const handleLoginSubmit = e => {
        e.preventDefault();
    }
    return (
        <Container>
            <Grid sx={{marginTop:8}} container spacing={2}>
                <Grid item xs={12} md={3}></Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>Get In Touch</Typography>
                    <form onSubmit={handleLoginSubmit}>
                    <TextField
                            sx={{ width: '100%', m: 1 }}
                            id="standard-basic"
                            label="Your name"
                            name="Name"
                            onChange={handleOnChange}
                            variant="standard" />
                        <TextField
                            sx={{ width: '100%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            onChange={handleOnChange}
                            variant="standard" />
                        <TextField sx={{width: '100%' }} id="standard-multiline-static" onChange={handleOnChange} multiline rows={3} placeholder="Write Message" variant="standard"/>

                        <Button sx={{ width: '30%', m: 1 }} type="submit" variant="contained">Submit</Button>
                    </form>
                </Grid>
                <Grid item xs={12} md={3}></Grid>
            </Grid>
        </Container>
    );
};

export default Contact;
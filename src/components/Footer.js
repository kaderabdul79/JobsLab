import styled from '@emotion/styled';
import { Box, Container, Link, Toolbar, Typography } from '@mui/material';
import React from 'react';

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent:"space-between"
})

const Footer = () => {
    return (
        <Container maxWidth="lg">
            <StyledToolbar>
                <Typography variant=''>JobLab.</Typography>
                <Box>
                    <Link href="#findjob" variant="body2" underline="none">Find job</Link>
                    <Link sx={{marginLeft: '8px'}} href="#postjob" variant="body2" underline="none">Post job</Link>
                </Box>
            </StyledToolbar>
            <Typography textAlign="center">developed by <Link href="https://github.com/kaderabdul79" variant="body2" underline="none">KaderAbdul</Link> {new Date().getFullYear()}. All rights reserved</Typography>
        </Container>
    );
};

export default Footer;
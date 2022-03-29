import { AppBar, Button, Collapse, Drawer, List, ListItemButton, ListItemIcon, ListItemText, Toolbar, Container, Link } from '@mui/material';
import {Drafts, ExpandLess, ExpandMore, Inbox, Menu, Send, StarBorder} from '@mui/icons-material';
import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';
import { Box } from '@mui/system';
import DrawerBar from './DrawerBar';
import { useState } from 'react';

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent:"space-between"
})

const Navbar = () => {
    const [openDrawer, setOpenDrawer] = useState(false)
    const toggleDrawer = (e) => {
        setOpenDrawer(e);
    }; 
    
    return (
        <AppBar position="sticky" sx={{bgcolor: 'background.paper',color:'black',boxShadow: 0}}>
            <Container maxWidth="lg">
            <StyledToolbar>
                <Link href="/" underline="none"><Typography variant='h6' marginRight='5px'>JobLab.</Typography></Link>
                
               
                <Box sx={{ display: {xs:"none",sm:"block"} }}>
                    <Box sx={{display: 'flex',gap:5,alignItems:'center'}}>
                    <Link href="jobs" underline="none"><Typography variant='span'>Jobs</Typography></Link>
                    <Link href="blog" underline="none"><Typography variant='span'>Blog</Typography></Link>
                    <Link href="about" underline="none"><Typography variant='span'>About</Typography></Link>
                    <Link href="contact" underline="none"><Typography variant='span'>Contact</Typography></Link>
                    
                    <Button disableElevation variant="contained">Find Job</Button>
                    {/* <Menu  onClick={()=>toggleDrawer(true)} /> */}
                    </Box>
                </Box>
                <Menu onClick={()=>toggleDrawer(true)} sx={{ display: {xs:"block",sm:"none"} }} />
                <DrawerBar openDrawer={openDrawer} toggleDrawer={toggleDrawer} />

            </StyledToolbar>
            </Container> 
        </AppBar>
    );
};

export default Navbar;
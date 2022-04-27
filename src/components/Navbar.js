import { AppBar, Button, Collapse, Drawer, List, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material';
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
        // console.log(openDrawer);
        // console.log(e);
        setOpenDrawer(e);
    }; 
    


    return (
        <AppBar position="sticky" sx={{bgcolor: 'background.paper',color:'black',boxShadow: 0}}>
            <StyledToolbar>
                <Typography variant='h6' marginRight='5px'>JobLab.</Typography>

                <Box sx={{ display: {xs:"none",sm:"block"} }}>
                    <Box sx={{display: 'flex',gap:5,alignItems:'center'}}>
                    <Typography variant='span'>Home</Typography>
                    <Typography variant='span'>About</Typography>
                    <Typography variant='span'>Job</Typography>
                    <Typography variant='span'>Blog</Typography>
                    <Typography variant='span'>Contact</Typography>

                    <Button disableElevation variant="contained">Find Job</Button>
                    <Menu  onClick={()=>toggleDrawer(true)} />
                    </Box>
                </Box>
                {/* <Menu onClick={()=>toggleDrawer(true)} sx={{ display: {xs:"block",sm:"none"} }} /> */}
                <DrawerBar openDrawer={openDrawer} toggleDrawer={toggleDrawer} />

            </StyledToolbar>
        </AppBar>
    );
};

export default Navbar;
import { AppBar, Button, Collapse, Drawer, List, ListItemButton, ListItemIcon, ListItemText, Toolbar, Container, Link } from '@mui/material';
import {Drafts, ExpandLess, ExpandMore, Inbox, Menu, Send, StarBorder} from '@mui/icons-material';
import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';
import { Box } from '@mui/system';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';

import { useEffect, useRef, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const Navbar = () => {
    const { user, logout } = useAuth();

    const [open, setOpen] = useState(false);
    const anchorRef = useRef(null);
  
    const handleToggle = () => {
      setOpen((prevOpen) => !prevOpen);
    };
  
    const prevOpen = useRef(open);

    useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);
    
    return (
        <Container maxWidth="lg">
            <Toolbar variant="dense" disableGutters={true} sx={{ display: 'flex',justifyContent: 'space-between' }}>
                <Box>
                    <Link href="/" underline="none"><Typography variant='h6'>JobLab.</Typography></Link>
                </Box>
               
                <Box sx={{ display: {xs:"none",sm:"block"} }}>
                  {
                    user?.email ? <Button ref={anchorRef} onClick={handleToggle}>{user.displayName}</Button>
                    : ''
                  }
                  
                <Popper open={open}  anchorEl={anchorRef.current}>
                    <Paper>
                    <MenuList>
                        <MenuItem onClick={logout}>Logout</MenuItem>
                    </MenuList>
                </Paper>
              </Popper>
                </Box>
            </Toolbar>
            </Container>
    );
};

export default Navbar;
import { AppBar, Button, Collapse, Drawer, List, ListItemButton, ListItemIcon, ListItemText, Toolbar, Container, Link } from '@mui/material';
import {Drafts, ExpandLess, ExpandMore, Inbox, Menu, Send, StarBorder} from '@mui/icons-material';
import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';
import { Box } from '@mui/system';
// import DrawerBar from './DrawerBar';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';

import { useEffect, useRef, useState } from 'react';

// const StyledToolbar = styled(Toolbar)({
//     display: "flex",
//     justifyContent:"space-between"
// })

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const anchorRef = useRef(null);
  
    const handleToggle = () => {
      setOpen((prevOpen) => !prevOpen);
    };
  
    const handleClose = (event) => {
      if (anchorRef.current && anchorRef.current.contains(event.target)) {
        return;
      }
  
      setOpen(false);
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
                    <Button ref={anchorRef} onClick={handleToggle}>Hello, A.Kader</Button>

                    <Popper open={open}  anchorEl={anchorRef.current}>
                    <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                    <MenuList>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </MenuList>
                    </ClickAwayListener>
                </Paper>
              </Popper>
                </Box>
            </Toolbar>
            </Container>
    );
};

export default Navbar;
import { AppBar, Button, Collapse, Drawer, List, ListItemButton, ListItemIcon, ListItemText, Toolbar, Link } from '@mui/material';
import {Drafts, ExpandLess, ExpandMore, Inbox, Menu, Send, StarBorder} from '@mui/icons-material';
import { useState } from 'react';

const DrawerBar = ({openDrawer,toggleDrawer}) => {
        // Nested List Item
        const [openNestedList, setOpenNestedList] = useState(true);

        const handleNestedList = () => {
            setOpenNestedList(!openNestedList);
        };
    return (
        <Drawer open={openDrawer} onClose={()=>toggleDrawer(false)}>
        <List sx={{ minWidth: {xs:"200px",sm:"250px"}, bgcolor: 'background.paper' }} component="nav">
            <ListItemButton>
            <ListItemIcon>
            <Send />
            </ListItemIcon>
            <Link href="jobs" underline="none"><ListItemText primary="Jobs" /></Link>
            </ListItemButton>
            <ListItemButton>
            <ListItemIcon>
            <Drafts />
            </ListItemIcon>
            <Link href="blog" underline="none"><ListItemText primary="Blog" /></Link>
            </ListItemButton>
            <ListItemButton>
            <ListItemIcon>
            <Drafts />
            </ListItemIcon>
            <Link href="about" underline="none"><ListItemText primary="About" /></Link>
            </ListItemButton>
            <ListItemButton>
            <ListItemIcon>
            <Drafts />
            </ListItemIcon>
            <Link href="contact" underline="none"><ListItemText primary="Contact" /></Link>
            </ListItemButton>
            <ListItemButton onClick={handleNestedList}>
            <ListItemIcon>
            <Inbox />
            </ListItemIcon>
            <ListItemText primary="Profile" />
            {openNestedList ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openNestedList} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Logout" />
            </ListItemButton>
            </List>
            </Collapse>
        </List>
        </Drawer>
    );
};

export default DrawerBar;
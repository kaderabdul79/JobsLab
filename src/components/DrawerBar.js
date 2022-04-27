import { AppBar, Button, Collapse, Drawer, List, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material';
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
        <List sx={{ width: '100%', minWidth: 300, bgcolor: 'background.paper' }} component="nav">
            <ListItemButton>
            <ListItemIcon>
            <Send />
            </ListItemIcon>
            <ListItemText primary="Home" />
            </ListItemButton>
            <ListItemButton>
            <ListItemIcon>
            <Drafts />
            </ListItemIcon>
            <ListItemText primary="About" />
            </ListItemButton>
            <ListItemButton>
            <ListItemIcon>
            <Drafts />
            </ListItemIcon>
            <ListItemText primary="Blog" />
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
                <ListItemText primary="Starred" />
            </ListItemButton>
            </List>
            </Collapse>
        </List>
        </Drawer>
    );
};

export default DrawerBar;
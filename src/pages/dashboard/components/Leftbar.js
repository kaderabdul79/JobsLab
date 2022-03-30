import { Delete, Home, Message, ModeNight, Pets, Shop, Store } from "@mui/icons-material";
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from "@mui/material";
import React from "react";

const LeftBar = () => {
  return (
    <Box flex={1} m={2} boxShadow={1} sx={{ display: {xs: "none", sm: "block"} }}>
      <Box position="fixed">
      <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="stats">
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Stats" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="alljob">
              <ListItemIcon>
                <Shop />
              </ListItemIcon>
              <ListItemText primary="All Job" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="addjob">
              <ListItemIcon>
                <Message />
              </ListItemIcon>
              <ListItemText primary="Add Job" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="profile">
              <ListItemIcon>
                <Store />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          
          {/* <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <ModeNight />
              </ListItemIcon>
              <Switch onChange={(e)=>setMode(mode === 'light' ? 'dark' : 'light')}></Switch>
            </ListItemButton>
          </ListItem> */}
      </List> </Box>   
    </Box>
  );
};

export default LeftBar;

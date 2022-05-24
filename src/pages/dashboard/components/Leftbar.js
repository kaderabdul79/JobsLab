import { AccountCircle, Add, BarChart, ClearAll, Delete, Home, Message, ModeNight, Pets, Shop, Store } from "@mui/icons-material";
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from "@mui/material";

const LeftBar = () => {
  return (
    <Box flex={1} m={2} boxShadow={1} sx={{ display: {xs: "none", sm: "block"} }}>
      <Box position="fixed">
      <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="stats">
              <ListItemIcon>
                <BarChart />
              </ListItemIcon>
              <ListItemText primary="Stats" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="alljob">
              <ListItemIcon>
                <ClearAll />
              </ListItemIcon>
              <ListItemText primary="All Job" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="addjob">
              <ListItemIcon>
                <Add />
              </ListItemIcon>
              <ListItemText primary="Add Job" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="profile">
              <ListItemIcon>
                <AccountCircle />
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

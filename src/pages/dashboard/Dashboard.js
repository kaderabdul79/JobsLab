import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import {
    Outlet,
    Link
} from "react-router-dom";
import { Button, ListItemButton } from '@mui/material';
import Navbar from './components/Navbar';

const drawerWidth = 200;

function Dashboard(props) {
   const drawer = (
        <div>
            <Toolbar >JobsLab.</Toolbar>
            <Divider />
            
            <ListItemButton><Link to="/dashboard/stats" underline="none">Dashboard</Link></ListItemButton>
            <ListItemButton><Link to="/dashboard/alljob" underline="none">All Job</Link></ListItemButton>
            <ListItemButton><Link to="/dashboard/addjob" underline="none">Add Job</Link></ListItemButton>
            <ListItemButton><Link to="/dashboard/profile" underline="none">Profile</Link></ListItemButton>
        </div>
    );

     return (
        <Box sx={{ display: 'flex' }}>
           <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
                <Drawer variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}>
                    <div>{drawer}</div>
                </Drawer>
            </Box>
            <Box sx={{ flexGrow: 1,  width: { sm: `calc(100% - ${drawerWidth}px)` } }}>
                <Navbar></Navbar>
                <Box sx={{p: 5}}><Outlet></Outlet></Box>
            </Box>

        </Box>
    );
}


export default Dashboard;

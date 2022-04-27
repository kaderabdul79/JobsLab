import { AppBar, Toolbar } from '@mui/material';
import {Menu} from '@mui/icons-material';
import Typography from '@mui/material/Typography';

const Navbar = () => {
    return (
        <AppBar position="sticky">
            <Toolbar variant="dense">
                <Menu />
                <Typography variant='span'>hello</Typography>

            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
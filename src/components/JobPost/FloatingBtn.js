import { Fab, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const FloatingBtn = () => {
    return (
        <Box sx={{position:'fixed',top:'90vh',left: {xs: "calc(50% - 10px)", md: 10 }}}>
            <Fab color="primary" aria-label="add">
                <AddIcon />
            </Fab>
        </Box>
    );
};

export default FloatingBtn;
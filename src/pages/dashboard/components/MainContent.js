import { Box } from '@mui/material';

const MainContent = () => {
    return (
        <Box flex={6} p={2}>
        <Box p={2} sx={{bgcolor: 'background.paper',color:'black',boxShadow: 1,minHeight:'100vh'}}>
            MainContent Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus officia dolor expedita maxime odio obcaecati exercitationem quia dolore voluptatem eius!
        </Box>
        </Box>
    );
};

export default MainContent;
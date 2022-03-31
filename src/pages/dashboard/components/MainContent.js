import { Box } from '@mui/material';
import Chart from './Chart';
import { userData } from '../../../dummyData';

const MainContent = () => {
    return (
        <Box flex={6} p={2}>
        <Box p={2} sx={{bgcolor: 'background.paper',color:'black',boxShadow: 1,minHeight:'100vh'}}>
            <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
        </Box>
        </Box>
    );
};

export default MainContent;
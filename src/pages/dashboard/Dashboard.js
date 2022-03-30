import { Stack } from '@mui/material';
import React from 'react';
import Leftbar from './components/Leftbar';
import MainContent from './components/MainContent';
import Navbar from './components/Navbar';

const Dashboard = () => {
    return (
        <>
        <Navbar sx={{boxShadow:'5px solid red'}} />
        <Stack direction="row" justifyContent='space-between' >
            <Leftbar />
            <MainContent />
        </Stack>
        </>
    );
};

export default Dashboard;
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Chart from './components/Chart';
import { userData } from '../../dummyData';

const DashboardHome = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
                <Chart data={userData} title="Job Posted" grid dataKey="Active Job"/>
            </Grid>
        </Grid>
    );
};

export default DashboardHome;
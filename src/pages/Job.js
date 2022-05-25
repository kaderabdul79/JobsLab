import { AccessTime, ArrowRightAlt, LocationOn } from '@mui/icons-material';
import { Box, Button, Card, CardContent, Grid, Link, Paper, Typography, Container  } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {jobsData} from '../dummyData';

const Job = () => {
    const [jobs,setJobs] = useState({});
    const {jobId} = useParams();
    console.log(jobId);
    // let navigate = useNavigate();
    return (
        <div>
            Hello {jobId}
        </div>
    );
};

export default Job;
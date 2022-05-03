import { Alert, Button, CircularProgress, Container, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
const AddNewJob = () => {
    const { user, registerUser,usingGoogleSignin, isLoading, authError } = useAuth();

    const [jobCategory, setJobCategory] = useState([{id:1,name:'IT'},{id:2,name:'Web Design'},{id:2,name:'Software Development'}]);
    const [jobLocation, setJobLocation] = useState([{id:1,name:'Uttara'},{id:2,name:'Nikunja'},{id:2,name:'Gulsan'}]);
    const [jobTags, setJobTags] = useState([{id:1,name:'Js'},{id:2,name:'React'},{id:2,name:'Laravel'}]);

    // const handleChange = (event) => {
    //     console.log(event.target.value);
    //     setJobCategory(event.target.value);
    //   };

   const [newJobInfo,setNewJobInfo] = useState({})

    // const navigate = useNavigate();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        console.log(value);
        // const newJobData = { ...newJobInfo };
        // newJobData[field] = value;
        // setNewJobInfo(newJobData);
    }

    const handleNewJobFormSubmit = e => {
        
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={8}>
                    <Typography variant="body1" gutterBottom>Add new Job</Typography>
                    {!isLoading && <form onSubmit={handleNewJobFormSubmit}>
                        <TextField sx={{ width: "75%" }} onChange={handleOnChange} placeholder="Enter job title" variant="standard" />
                        <Typography>Select Category</Typography>
                        <Select sx={{ width: '75%', m: 1 }}>
                            {
                                jobCategory.map((item,index)=>(
                                    <MenuItem  onChange={handleOnChange} key={item.id} value={item.name}>{item.name}</MenuItem>
                                ))
                            }
                        </Select>
                        <TextField sx={{ width: "75%" }} id="standard-multiline-static" onChange={handleOnChange} multiline rows={3} placeholder="Enter job description" variant="standard"/>
                        <Typography>Select Job Location</Typography>
                            <Select sx={{ width: '75%', m: 1 }}>
                            {
                                jobLocation.map((item,index)=>(
                                    <MenuItem key={item.id} value={item.name}>{item.name}</MenuItem>
                                ))
                            }
                            </Select>
                            <Typography>Select Tag</Typography>
                            <Select sx={{ width: '75%', m: 1 }}>
                            {
                                jobTags.map((item,index)=>(
                                    <MenuItem key={item.id} value={item.name}>{item.name}</MenuItem>
                                ))
                            }
                            </Select>
                        <Button sx={{ width: '30%', m: 1 }} type="submit" variant="contained">Add New Job</Button>  
                    </form>}
                    {isLoading && <CircularProgress />}
                    {/* {user?.email && <Alert severity="success">Job Posted!</Alert>} */}
                    {authError && <Alert severity="error">{authError}</Alert>}
                </Grid>
            </Grid>
        </Container>
    );
};

export default AddNewJob;
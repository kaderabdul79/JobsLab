import { Avatar, Container, Divider, Grid, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const About = () => {
    const testimonials = [
        {id:1,name:'Tanvi H.',whatheSaid: "Wow what great service, I love it! We've used software development for the last five years. Software development is exactly what our business has been lacking. Just what I was looking for.",photoUrl:'https://img.freepik.com/free-photo/headshot-young-happy-successful-male-office-worker-businessman-wearing-suit-smiling-camera-with-positive-face-expression-while-posing-against-grey-studio-background-business-people-concept_95891-6895.jpg?w=996'},
        {id:2,name:'Riaz Hasan',whatheSaid: "I don't always clop, but when I do, it's because of web development. Web development should be nominated for service of the year. Web development is exactly what our business has been lacking. I am really satisfied with my web development.",photoUrl:'https://img.freepik.com/free-photo/young-attractive-asian-business-man-wearing-navy-blue-suit-with-white-shirt-necktie-sitting-down-executive-chair-making-confident-face-office-with-natural-lighting_102814-2054.jpg?w=360'},
        {id:3,name:'Anik Datta.',whatheSaid: "Absolutely wonderful! I love your system. I couldn't have asked for more than this. I couldn't have asked for more than this.",photoUrl:'https://img.freepik.com/free-photo/headshot-young-happy-successful-male-office-worker-businessman-wearing-suit-smiling-camera-with-positive-face-expression-while-posing-against-grey-studio-background-business-people-concept_95891-6895.jpg?w=996'},
        {id:4,name:'Albi',whatheSaid: "Job was worth a fortune to my company. We can't understand how we've been living without job.",photoUrl:'https://img.freepik.com/free-photo/young-attractive-asian-business-man-wearing-navy-blue-suit-with-white-shirt-necktie-sitting-down-executive-chair-making-confident-face-office-with-natural-lighting_102814-2054.jpg?w=360'}
    ]
    return (
        <Container maxWidth="md" sx={{bgcolor: "#F7FAFF",paddingY:2}}>
            <Navbar />
        <Grid container spacing={2} sx={{paddingY:3}}>
            <Grid item xs={8}>
                <Typography variant='h4'>A job board comparison Tool brought to you by Aktor Interactive</Typography>
                <Typography>Launched in 2011 by Aktor Interactive, Jobboard Finder provides HR professionals a centralized source of information about job sites worldwide. Founded in 1999, Aktor Interactive is an international HR & communications agency advertising for more than 250 customers on 900 job boards across the globe.</Typography>

                <Typography variant='body1' sx={{paddingY:3}}>A more and more complex recruiting process
                Nowadays recruiting online is a very common practice for hirers, but when it comes to choosing the right job site for their needs, the task becomes difficult.
                There are thousands of employment job sites worldwide but every country has its own specialist and generalist employment job boards.
                How can recruiters find the best job board in a different country ?</Typography>

                <Typography>The purpose of Jobboard Finder
                Jobboard Finder was designed to make the recruiters' work easier with advanced search and comparison tools for recruitment media all over the world.

                Jobboard Finder is a goldmine for recruiters: it gathers convenient tools and quality data on a single website that makes online recruiting as simple as online shopping.

                It doesn’t matter how specific the targeted profile is or how far the targeted country is located, Jobboard Finder is the solution for recruiters who want to identify the job sites that meet their demands.</Typography>
            </Grid>
            <Grid item xs={4}>
                <Typography marginLeft={2} variant='h4'>Our Testimonial</Typography>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    {
                        testimonials.map((testimonial)=>(
                            <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                            <Avatar alt="photo" src={testimonial.photoUrl} />
                            </ListItemAvatar>
                            <ListItemText
                            primary=''
                            secondary={
                                <React.Fragment>
                                <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >{testimonial.name}</Typography>
                                {testimonial.whatheSaid}
                                </React.Fragment>
                            }
                            />
                        </ListItem>
                        ))
                        }
                
                </List>
            </Grid>
        </Grid>
        <Footer />
        </Container>
    );
};

export default About;
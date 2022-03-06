import { Container } from '@mui/material';
import React from 'react';
import Companies from './components/Companies';
import Hero from './components/Hero';
import JobProcess from './components/JobProcess';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div>
      <Container maxWidth="lg">
        <Navbar />
        <Hero />
        <Companies />
        <JobProcess />
      </Container>
    </div>
  );
};

export default App;
import { Container } from '@mui/material';
import React from 'react';
import Companies from './components/Companies';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div>
      <Container maxWidth="lg">
        <Navbar />
        <Hero />
        <Companies />
      </Container>
    </div>
  );
};

export default App;
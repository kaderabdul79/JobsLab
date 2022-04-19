import { Container } from '@mui/material';
import React from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div>
      <Container maxWidth="lg">
        <Navbar />
        <Hero />
      </Container>
    </div>
  );
};

export default App;
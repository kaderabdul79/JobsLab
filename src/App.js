import { Container } from '@mui/material';
import Candidates from './components/Candidates';
import Companies from './components/Companies';
import Hero from './components/Hero';
import JobLists from './components/JobLists';
import JobProcess from './components/JobProcess';
import Leads from './components/Leads';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div>
      
        <Navbar />
        <Hero />
        <Companies />
        <JobProcess />
        <Leads />
        <JobLists />
      
      <Container maxWidth="xl" sx={{bgcolor: "#F7FAFF",paddingY:8}}>
        <Candidates />
      </Container>
      
    </div>
  );
};

export default App;
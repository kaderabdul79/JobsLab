import { Container } from '@mui/material';
import Candidates from './components/Candidates';
import Companies from './components/Companies';
import Footer from './components/Footer';
import Hero from './components/Hero';
import JobLists from './components/JobLists';
import JobProcess from './components/JobProcess';
import Leads from './components/Leads';
import Navbar from './components/Navbar';
import NewsLetter from './components/NewsLetter';
import Testimonial from './components/Testimonial';

const App = () => {
  return (
    <div>
      
        <Navbar />
        <Hero />
        <Companies />
        <JobProcess />

        <Container maxWidth="xl" sx={{bgcolor: "#F7FAFF",paddingY:4}}>
          <Leads />
        </Container>

        <JobLists />
      
      <Container maxWidth="xl" sx={{bgcolor: "#F7FAFF",paddingY:8}}>
        <Candidates />
      </Container>
      <Testimonial />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default App;
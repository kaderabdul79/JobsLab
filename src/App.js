import { Routes, Route, Link } from "react-router-dom";
import About from './pages/About';
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Jobs from "./pages/Jobs";
import Dashboard from "./pages/dashboard/Dashboard";


const App = () => {
  return (
    <div>
      {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Routes>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
import { Routes, Route, Link } from "react-router-dom";
import About from './pages/About';
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AuthProvider from "./context/AuthProvider/AuthProvider";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import JobsList from "./pages/dashboard/JobsList";
import AddNewJob from "./pages/dashboard/AddNewJob";
import Profile from "./pages/dashboard/Profile";
import DashboardHome from "./pages/dashboard/DashboardHome";
import AllJobs from "./pages/AllJobs";
import Job from "./pages/Job";

const App = () => {
  return (
    <AuthProvider>
      {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="jobs" element={<PrivateRoute><AllJobs /></PrivateRoute>}/>
          <Route path={`job/:jobId`} element={<Job />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />

          <Route path="/dashboard" element={<PrivateRoute>
              <Dashboard />
            </PrivateRoute>}>
              <Route path={`/dashboard/stats`} element={<DashboardHome></DashboardHome>} /> 
              <Route path={`/dashboard/alljob`} element={<JobsList></JobsList>} /> 
              <Route path={`/dashboard/addjob`} element={<AddNewJob></AddNewJob>} />  
              <Route path={`/dashboard/profile`} element={<Profile></Profile>} />  
              
              </Route>

        </Routes>
      {/* <Footer /> */}
    </AuthProvider>
  );
};

export default App;
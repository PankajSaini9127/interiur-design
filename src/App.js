import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import { CssBaseline, Container } from '@mui/material';
import './App.css';
import Footer from './components/Footer';
import theme from './utils/theme';
import { ThemeProvider } from '@mui/material/styles';

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      {/* <Container> */}
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      {/* </Container> */}
      <Footer/>
      </ThemeProvider>
    </Router>
  );
};

export default App;

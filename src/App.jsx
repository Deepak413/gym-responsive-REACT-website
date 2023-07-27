import { Route, Routes } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import './App.css';
import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Services from './Services';
import About from './About';
import Gallery from './Gallery';
import Contact from './Contact';
import Footer from './Footer';

const App = () => {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/services' Component={Services}/>
        <Route path='/gallery' Component={Gallery}/>
        <Route path='/about' Component={About}/>
        <Route path='/contact' Component={Contact}/>
        <Route path='/*' Component={Home}/>
      </Routes>
      <Footer />
    </>
  );
}
export default App;



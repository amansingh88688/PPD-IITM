import React, { useEffect } from 'react';
import './App.css';
import {Route, Routes, useLocation } from 'react-router-dom';
import Homepage from './components/homepage/Homepage';
import About from './components/about-us/About';
import Personal from './components/personal-dev/Personal';
import Professional from './components/professional-dev/Professional';
import Blog from './components/blog/Blog';
import Media from './components/media/Media';
import Navbar from './components/navbar/Navbar';

function App() {

  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to the top whenever the pathname changes
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/personal' element={<Personal/>}/>
        <Route path='/professional' element={<Professional/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/media' element={<Media/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
      
    </>
  );
}

export default App;

import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/about';
import Home from './pages/home';
import Obituary from './pages/Eulogy';

export default function App() {
  return <BrowserRouter>
  <Routes>
    <Route path='/home' element={<Home />} />
    <Route path='/eulogy' element={<eulogy />} />
    <Route path='/about' element={<About />} />
  </Routes>
  </BrowserRouter>;
   }

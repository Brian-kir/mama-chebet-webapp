import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/about';
import Home from './pages/home';
import Eulogy from './pages/Eulogy';
import Header from './components/Header';

export default function App() {
  return <BrowserRouter>
  <Header />
  <Routes>
    <Route path='/home' element={<Home />} />
    <Route path='/eulogy' element={<Eulogy />} />
    <Route path='/about' element={<About />} />
  </Routes>
  </BrowserRouter>;
   }

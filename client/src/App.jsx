import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/about';
import Home from './pages/home';
import Obituary from './pages/obituary';

export default function App() {
  return <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/' element={<Obituary />} />
    <Route path='/' element={<About />} />
  </Routes>
  </BrowserRouter>;
   }

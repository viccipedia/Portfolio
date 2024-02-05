import { useState } from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar'
import Home from './Home';
import Projects from './Projects';

function App() {

  return (
    <>

<BrowserRouter>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      </Routes>
      </BrowserRouter>

    </>
  )
}

export default App

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Calculator from './components/calculator';
import Home from './components/home';
import NavBar from './components/nav';
import Quote from './components/quote';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

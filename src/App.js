import logo from './logo.svg';
import './App.css';
import React from 'react';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Axiosmethod from './components/Axios';

function App() {
  return (
    <div>
      <Router>
        <Home />
        <Routes>
        <Route  path="/home" element={<Home />} />
        <Route  path="/axios" element={<Axiosmethod />} />
        </Routes>
      </Router>
      
       </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
//import logo from './logo.svg';
//import './App.css';

function App() {
  return (

    //<Login />
    <Router>
      <Routes>
        <Route path="/" element={<h1>Welcome to VTaSk Manager</h1>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;

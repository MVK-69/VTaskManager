import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import TestLogin from './pages/testLogin';
import LandingPage from './pages/LandingPage';
//import logo from './logo.svg';
//import './App.css';

function App() {
  return (

    //<Login />
    <Router>
      <Routes>
        {/*<Route path="/" element={<h1>Welcome to VTaSk Manager</h1>} />*/}
        <Route path="/" element={<LandingPage />} />
        <Route path="/hello" element={<TestLogin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;

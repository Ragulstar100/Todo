import { useState,useEffect } from 'react'

import './App.css'
import TextField from './ui(components)/TextField'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Auth from './pages/Auth'
import Home from './pages/Home'
import { useNavigate } from 'react-router-dom';
import { getToken } from './db/localDb/Token';
import { tasks } from './db/Mongo';

export let shareValue

function App() {
  const navigate = useNavigate();

 
  useEffect(() => {
    const token = getToken()
    if (token) {
      navigate('/home')
    } else {
      navigate('/');
    }
    
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;

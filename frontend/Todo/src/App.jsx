import { useState,useEffect } from 'react'

import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Auth from './pages/Auth'
import Home from './pages/Home'
import { useNavigate } from 'react-router-dom';
import { getToken } from './db/localDb/Token';
import { tasks } from './db/Mongo';
import { AppRoutes } from './roter/Route';
import { ThemeProvider } from './context/themeContext';
import { ToastContainer,toast } from 'react-toastify';

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
   <ThemeProvider>
    <AppRoutes/>
    <ToastContainer/>
  </ThemeProvider>

  );
}

export default App;

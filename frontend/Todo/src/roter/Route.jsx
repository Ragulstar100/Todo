import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import {Routes,Route} from "react-router-dom"
import Auth from '../pages/Auth'
import Home from '../pages/Home'
import { getToken } from '../db/localDb/Token';

export function AppRoutes(){

const navigate = useNavigate();

 
  useEffect(() => {
    const token = getToken()
    if (token) {
      navigate('/home')
    } else {
      navigate('/');
    }
    
  }, []);
    return <Routes>
        
      <Route path="/" element={<Auth />} />
      <Route path="/home" element={<Home />} />
    </Routes>

}
import { useState } from 'react'
import Signup from './signup';
import './index.css' ;
import Login from './Login';
import Profile from './profile';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/register" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
    
  );
}

export default App

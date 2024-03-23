import { useState } from 'react'
import './App.css'
import { Route, Routes, useNavigate } from "react-router";
import Home from './pages/Home'
import SignInForm from './pages/login';
import SearchCVs from './pages/SearchCVs';

function App() {


  return (
    <>
      <Routes>
    <Route path='/home' element={<Home />}/>
    <Route path='/login' element={<SignInForm />}/>
    <Route path='/search' element={<SearchCVs />}/>
  </Routes>
  
    </>
  )
}

export default App

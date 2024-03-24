import logo from './logo.svg';
import './App.css';

import { Route, Routes, useNavigate } from "react-router";
import UploadCVForm from './pages/UploadCV';
import Home from './pages/Home';
function App() {
 
  return (
    <Routes>
<Route path='/uploadCV' element={<UploadCVForm/>}/>
<Route path='/' element={<Home/>}/>
  </Routes>
  );
}

export default App;

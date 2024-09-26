import { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import './App.css';
import Footer from './components/Footer';
import Navbar from './components/navbar';
import Home from './pages/Home';
import Qr from "./pages/qr";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Navbar/>
        <Routes>
          <Route  path='/' element={<Home/>} />
          <Route path='/display_qr' element={<Qr/>}/>
        </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App

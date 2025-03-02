/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' */
/* import './App.css' */
import { Routes, Route } from 'react-router'; 
import Home from './features/home/Home';
import Boxes from './features/boxes/Boxes';
import NavigationBar from './shared/components/navbar/NavigationBar';
import Footer from './shared/components/footer/Footer';

function App() {

  return (
    <>
    <NavigationBar />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/boxes" element={<Boxes/>} />
    </Routes>
    <Footer />  
    </>
  )
}

export default App

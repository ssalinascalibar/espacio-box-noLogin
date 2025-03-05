import { Routes, Route } from 'react-router'; 
import Home from './features/home/Home';
import About from './features/about/About';
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
      <Route path="/nosotros" element={<About/>} />
    </Routes>
    <Footer />  
    </>
  )
}

export default App

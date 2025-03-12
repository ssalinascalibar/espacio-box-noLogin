import { Routes, Route } from 'react-router'; 
import Home from './features/home/Home';
import About from './features/about/About';
import Boxes from './features/boxes/Boxes';
import Contact from './features/contact/Contact';
import NavigationBar from './shared/components/navbar/NavigationBar';
import Footer from './shared/components/footer/Footer';
import WhatsappButton from './shared/components/buttons/WhatsappButton';

function App() {

  return (
    <>
    <NavigationBar />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/boxes" element={<Boxes/>} />
      <Route path="/nosotros" element={<About/>} />
      <Route path="/contacto" element={<Contact/>} />
    </Routes>
    <WhatsappButton />
    <Footer />  
    </>
  )
}

export default App

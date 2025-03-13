import { Routes, Route, useLocation } from 'react-router'; 
import Home from './features/home/Home';
import About from './features/about/About';
import Boxes from './features/boxes/Boxes';
import Contact from './features/contact/Contact';
import NavigationBar from './shared/components/navbar/NavigationBar';
import Footer from './shared/components/footer/Footer';
import Login from './features/auth/Login';
import WhatsappButton from './shared/components/buttons/WhatsappButton';

function App() {
  const location = useLocation();
  const isLoginRoute = location.pathname === '/login';

  return (
    <>
    {!isLoginRoute && <NavigationBar />}
    <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path="/" element={<Home/>} />
      <Route path="/boxes" element={<Boxes/>} />
      <Route path="/nosotros" element={<About/>} />
      <Route path="/contacto" element={<Contact/>} />
    </Routes>
    {!isLoginRoute && <WhatsappButton />}
    {!isLoginRoute && <Footer />} 
    </>
  )
}

export default App

import { Routes, Route, useLocation } from 'react-router'; 
import Home from './features/home/Home';
import About from './features/about/About';
import Boxes from './features/boxes/Boxes';
import Contact from './features/contact/Contact';
import NavigationBar from './shared/components/navbar/NavigationBar';
import Footer from './shared/components/footer/Footer';
import Login from './features/auth/Login';
import AdminPanel from './features/adminPanel/AdminPanel';
import WhatsappButton from './shared/components/buttons/WhatsappButton';

function App() {
  const location = useLocation();
  const isLoginRoute = location.pathname === '/login';
  const isAdminRoute = location.pathname === '/admin';
  // const isLoginRoute = location.pathname === '/login' || location.pathname === '/admin';

  return (
    <>
    {!isLoginRoute && <NavigationBar />}
    <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path="/" element={<Home/>} />
      <Route path="/boxes" element={<Boxes/>} />
      <Route path="/nosotros" element={<About/>} />
      <Route path="/contacto" element={<Contact/>} />
      <Route path="/admin" element={<AdminPanel/>} />
    </Routes>
    {!isLoginRoute && !isAdminRoute && <WhatsappButton />}
    {!isLoginRoute && <Footer />} 
    </>
  )
}

export default App

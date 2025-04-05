import { Routes, Route, useLocation } from 'react-router-dom'; 
import Home from './features/home/Home';
import About from './features/about/About';
import Boxes from './features/boxes/Boxes';
import Contact from './features/contact/Contact';
import NavigationBar from './shared/components/navbar/NavigationBar';
import Footer from './shared/components/footer/Footer';
import Login from './features/auth/Login';
import UserLogin from './features/auth/UserLogin';
import { AuthAdminRoutes, AuthUserRoutes } from './features/auth/PrivateRoutes';
import AdminPanel from './features/adminPanel/AdminPanel';
import Reserve from './features/reserve/Reserve';
import WhatsappButton from './shared/components/buttons/WhatsappButton';
import { UserContextProvider } from './context/UserContext';

function App() {
  const location = useLocation();
  const isLoginRoute = location.pathname === '/login';
  const isAdminRoute = location.pathname === '/admin';
  // const isLoginRoute = location.pathname === '/login' || location.pathname === '/admin';

  return (
    <>
    {!isLoginRoute && <NavigationBar />}
    <UserContextProvider>
    <Routes>
      <Route path="/userlogin" element={<UserLogin/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/" element={<Home/>} />
      <Route path="/boxes" element={<Boxes/>} />
      <Route path="/nosotros" element={<About/>} />
      <Route path="/contacto" element={<Contact/>} />
      <Route element={<AuthUserRoutes/>}>
        <Route path="/agendar" element={<Reserve/>} />
      </Route>
      <Route element={<AuthAdminRoutes/>}>
        <Route path="/admin" element={<AdminPanel/>} />
      </Route>
    </Routes>
    </UserContextProvider>
    {!isLoginRoute && !isAdminRoute && <WhatsappButton />}
    {!isLoginRoute && <Footer />} 
    </>
  )
}

export default App

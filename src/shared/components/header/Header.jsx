import Container from 'react-bootstrap/Container';
import './header.css';
import { MdOutlineEmail, MdOutlineLocationOn } from '../../../assets/icons/icons';

function Header() {
  return (
    <>
        <header>
          <Container>
            <p className='contacto'><MdOutlineEmail />contacto.espaciobox@gmail.com</p>
            <p className='ubicacion'><MdOutlineLocationOn />Guardia Vieja 255, Of.1803 Providencia - Metro los Leones</p>
          </Container>
        </header>
    </>
  )
}

export default Header
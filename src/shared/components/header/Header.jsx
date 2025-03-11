import Container from 'react-bootstrap/Container';
import './header.css';
import { MdOutlineEmail, MdOutlineLocationOn } from '../../../assets/icons/icons';

export default function Header() {
  return (
    <>
        <header>
          <Container>
          <a href="mailto:contacto.espaciobox@gmail.com">
    <p className="contacto">
        <MdOutlineEmail /> contacto.espaciobox@gmail.com
    </p>
</a>
            {/* <p className='contacto'><MdOutlineEmail />contacto.espaciobox@gmail.com</p> */}
            <p className='ubicacion'><MdOutlineLocationOn />Guardia Vieja 255, Of.1803 Providencia - Metro los Leones</p>
          </Container>
        </header>
    </>
  )
}
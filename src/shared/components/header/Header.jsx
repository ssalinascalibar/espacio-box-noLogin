import Container from "react-bootstrap/Container";
import "./header.css";
import {
  MdOutlineEmail,
  MdOutlineLocationOn,
  FaInstagram,
} from "../../../assets/icons/icons";

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
          <p className="ubicacion">
            <MdOutlineLocationOn />
            Guardia Vieja 255, Of.1803 Providencia - Metro los Leones
          </p>
          <p className="ubicacion">
            <MdOutlineLocationOn />
            Avenida Providencia 2370
          </p>
          <a
            href="https://www.instagram.com/espaciobox_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="ubicacion">
              <FaInstagram /> Instagram
            </p>
          </a>
        </Container>
      </header>
    </>
  );
}

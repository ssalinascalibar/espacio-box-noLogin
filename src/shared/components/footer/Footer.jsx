import Container from "react-bootstrap/Container";
import { FaInstagram } from "../../../assets/icons/icons";
import "./footer.css";

export default function Footer() {
  // variable contiene el año en curso,
  const year = new Date().getFullYear();

  return (
    <footer>
      <Container>
        <div className="footer-content">
          <div className="footer-info">
            <h3>Profesionales</h3>
            <ul>
              <li>Camila Unda</li>
              <li>Rodrigo Ramos</li>
              <li>Silvia Pedreros</li>
              <li>Matías Bunster</li>
              <li>María Ignacia Muster</li>
              <li>Emilia Espina</li>
            </ul>
          </div>
          <div className="footer-info">
            <h3>Ubicación</h3>
            <p>Guardia Vieja 255, Of.1803 Providencia - Metro los Leones</p>
          </div>
          <div className="footer-info">
            <h3>Contacto</h3>
            <p>contacto.espaciobox@gmail.com</p>
          </div>
        </div>
        <hr />
        <div className="footer-copyright">
          <a href="https://www.instagram.com/espaciobox_/#"
          target="_blank"
          rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <p>
            &copy; {year} <b>EspacioBox</b>. Todos los derechos reservados.
          </p>
        </div>
      </Container>
    </footer>
  );
};

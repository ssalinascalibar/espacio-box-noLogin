import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import { FaHandPointRight } from "../../assets/icons/icons";
import {
  MdSearch,
  FaHandHoldingHeart,
  GiArrowScope,
} from "../../assets/icons/icons";
import "./about.css";

export default function About() {
  return (
    <main>
      <Container>
        <section id="aboutUs">
          <div className="backgroundSection">
            <Row>
              <Col lg={7} className="col-style-about">
                <h2 className="section-titles">Sobre nosotros</h2>
                <article>
                  <p>
                    En EspacioBox creemos que el bienestar comienza con quienes
                    lo brindan. Más que ofrecer un lugar cómodo para atender,
                    construimos una comunidad de profesionales de la salud que
                    se acompañan, se apoyan y crecen juntos.
                  </p>
                  <p>
                    Sabemos que el ejercicio independiente puede ser solitario.
                    Por eso, fomentamos redes de contención, colaboración y
                    derivación, donde el cuidado también incluye a quienes
                    cuidan.
                  </p>
                  <p>
                    Si trabajas con nosotros, ya eres parte de esta comunidad.
                    <br /> Y si aún no lo haces, te invitamos a unirte y
                    descubrir un espacio donde podrás ejercer con libertad,
                    compartir con otros profesionales y fortalecer tu práctica
                    desde el autocuidado y el trabajo en red. Link a agendar
                  </p>
                </article>
                <Link to="/agendar">
                  <FaHandPointRight />
                  AGENDA AQUÍ
                </Link>
              </Col>
              <Col lg={5}>
                <div className="fluid-image">
                  <Image src="/assets/img/about.jpg" fluid />
                </div>
              </Col>
            </Row>
          </div>
          <Row className="background-row">
            <Col lg={4}>
              <div className="values-about value-title">
                <MdSearch />
                <h5>Visión</h5>
              </div>
            </Col>
            <Col lg={8}>
              <div className="values-about">
                <p>
                  Construir una comunidad referente en salud integral, donde
                  cada profesional se sienta valorado, acompañado y parte de una
                  red que impulsa el bienestar desde el trabajo colaborativo y
                  el respeto mutuo.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="background-row">
            <Col lg={4}>
              <div className="values-about value-title">
                <FaHandHoldingHeart />
                <h5>Valores</h5>
              </div>
            </Col>

            <Col lg={8}>
              <div className="values-about">
                <h6>Cuidado</h6>
                <p>
                  Ponemos en el centro el bienestar de los profesionales que
                  trabajan con nosotros.
                </p>
                <h6>Colaboración</h6>
                <p>
                  Fomentamos una red de apoyo entre profesionales de distintas
                  áreas.
                </p>
                <h6>Confianza</h6>
                <p>Construimos relaciones transparentes y responsables.</p>
                <h6>Bienestar</h6>
                <p>Creamos espacios cálidos, funcionales y humanos.</p>
              </div>
            </Col>
          </Row>
          <Row className="background-row">
            <Col lg={4}>
              <div className="values-about value-title">
                <GiArrowScope />
                <h5>Misión</h5>
              </div>
            </Col>
            <Col lg={8}>
              <div className="values-about">
                <p>
                  Crear espacios pensados para cuidar a quienes cuidan.
                  Brindamos ambientes seguros, acogedores y funcionales para
                  profesionales de la salud, fortaleciendo una comunidad que
                  comparte el propósito de sanar, acompañar y transformar vidas.
                </p>
              </div>
            </Col>
          </Row>
        </section>
      </Container>
    </main>
  );
}

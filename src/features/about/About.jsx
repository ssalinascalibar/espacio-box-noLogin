import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { Link } from 'react-router-dom';
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
                    Si trabajas con nosotros, ya eres parte de esta comunidad.<br/> Y
                    si aún no lo haces, te invitamos a unirte y descubrir un
                    espacio donde podrás ejercer con libertad, compartir con
                    otros profesionales y fortalecer tu práctica desde el
                    autocuidado y el trabajo en red. Link a agendar
                  </p>
                </article>
                <Link to="/agendar"><FaHandPointRight />AGENDA AQUÍ</Link>
              </Col>
              <Col lg={5}>
                <div className="fluid-image">
                  <Image src="/assets/img/about.jpg" fluid />
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={4} lg={4}>
                <div className="values-about">
                  <MdSearch />
                  <h5>Visión</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Saepe atque, tempore necessitatibus cum illum quam a aperiam
                    quaerat iste laborum aliquid rem est mollitia ab nulla rerum
                    ullam! Quae, quisquam?
                  </p>
                </div>
              </Col>
              <Col md={4} lg={4}>
                <div className="values-about">
                  <FaHandHoldingHeart />
                  <h5>Valores</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Saepe atque, tempore necessitatibus cum illum quam a aperiam
                    quaerat iste laborum aliquid rem est mollitia ab nulla rerum
                    ullam! Quae, quisquam?
                  </p>
                </div>
              </Col>
              <Col md={4} lg={4}>
                <div className="values-about">
                  <GiArrowScope />
                  <h5>Misión</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Saepe atque, tempore necessitatibus cum illum quam a aperiam
                    quaerat iste laborum aliquid rem est mollitia ab nulla rerum
                    ullam! Quae, quisquam?
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </section>
      </Container>
    </main>
  );
}

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { MdSearch, FaHandHoldingHeart, GiArrowScope } from "../../assets/icons/icons";
import "./about.css";

export default function About() {
  return (
    <main>
      <Container>
        <section>
          <div className="backgroundSection">
            <Row>
              <Col lg={7} className="col-style-about">
                <h2 className="section-titles">Bienvenidos a nuestra comunidad de profesionales</h2>
                <article>
                  <p>
                    En EspacioBox buscamos ser más que un espacio donde atender
                    a sus pacientes con comodidad sino también construir una
                    comunidad de profesionales que puedan apoyarse entre sí.
                  </p>
                  <p>
                    Sabemos que el trabajo independiente puede ser solitario y
                    contar con redes de apoyo es fundamental para brindar un
                    buen servicio centrado en la ética para todos nuestros
                    consultantes, dónde también consideremos a la persona del
                    terapeuta o especialista como parte central de nuestro
                    trabajo.
                  </p>
                  <p>
                    Invitamos a todos quienes trabajan con nosotros a formar
                    parte de esta comunidad como una red de apoyo, autocuidado y
                    derivación.
                  </p>
                </article>
              </Col>
              <Col lg={5}>
                <div className="fluid-image">
                <Image src="/assets/img/about.jpg" fluid />
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg={4}>
                <div className="values-about">
                  <MdSearch />
                  <h5>Visión</h5>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe atque, tempore necessitatibus cum illum quam a aperiam quaerat iste laborum aliquid rem est mollitia ab nulla rerum ullam! Quae, quisquam?</p>
                </div>
              </Col>
              <Col lg={4}>
                <div className="values-about">
                  <FaHandHoldingHeart />
                  <h5>Valores</h5>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe atque, tempore necessitatibus cum illum quam a aperiam quaerat iste laborum aliquid rem est mollitia ab nulla rerum ullam! Quae, quisquam?</p>
                </div>
              </Col>
              <Col lg={4}>
                <div className="values-about">
                  <GiArrowScope />
                  <h5>Misión</h5>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe atque, tempore necessitatibus cum illum quam a aperiam quaerat iste laborum aliquid rem est mollitia ab nulla rerum ullam! Quae, quisquam?</p>
                </div>
              </Col>
            </Row>
          </div>
        </section>
      </Container>
    </main>
  );
}

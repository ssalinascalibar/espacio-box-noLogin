import { useRef } from "react";
import Container from "react-bootstrap/Container";
import InfoCards from "./InfoCards";
import FeatureSection from "./FeatureSection";
import ProfessionalCards from "../../shared/components/cards/ProfessionalCards";
import VideoSection from "./VideoSection";
import { Link } from 'react-router-dom';
import { FaHandPointRight } from "../../assets/icons/icons"
// import { ReserveBtn } from "../../shared/components/buttons/Buttons";
import "./home.css";

export default function Home() {
  const professionalsRef = useRef(null);
  return (
    <>
      <main>
        <section className="hero">
          <Container>
            <div className="hero-text">
              {/* <h1>EspacioBox</h1>
              <h2>Servicio de arriendo de box </h2> */}
              <h1>Bienvenidos a EspacioBox</h1>
              <p>
                Creamos espacios para cuidar a quienes cuidan. Encuentra aquí tu
                box ideal, seguro, acogedor y funcional, pensado para
                profesionales de la salud que acompañan, sanan y transforman
                vidas.
              </p>
              <p><Link to="/agendar"><FaHandPointRight />AGENDA AQUÍ</Link> tu espacio y sé parte de nuestra comunidad.</p>
              {/* <ReserveBtn /> */}
            </div>
          </Container>
        </section>
        <section>
          <Container>
            <InfoCards professionalsRef={professionalsRef} />
          </Container>
        </section>
        <section>
          <Container>
            <VideoSection />
          </Container>
        </section>
        <section ref={professionalsRef} id="professionals-section">
          <Container>
            <ProfessionalCards />
          </Container>
        </section>
        <section>
          <Container>
            <FeatureSection />
          </Container>
        </section>
      </main>
    </>
  );
}

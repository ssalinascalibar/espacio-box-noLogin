import Container from 'react-bootstrap/Container';
import InfoCards from './InfoCards';
import FeatureSection from './FeatureSection';
import ProfessionalCards from '../../shared/components/cards/ProfessionalCards';
import VideoSection from './VideoSection';
import { ReserveBtn } from '../../shared/components/buttons/Buttons';
import "./home.css";

export default function Home() {
  return (
    <>
      <main>
        <section className="hero">
          <Container>
          <div className="hero-text">
            <h1>EspacioBox</h1>
            <h2>solución en arriendo de espacios</h2>
            <p>
              En EspacioBox buscamos ser más que un espacio donde atender a sus
              pacientes con comodidad sino también construir una comunidad de
              profesionales que puedan apoyarse entre sí.{" "}
            </p>
            <ReserveBtn />
          </div>
          </Container>
        </section>
        <section>
          <Container>
            <InfoCards />
          </Container>
        </section>
        <section className="style-boxes">
          <Container>
            <FeatureSection />
          </Container>
        </section>
        <section>
          <Container>
            <ProfessionalCards />
          </Container>
        </section>
        <section className="style-boxes">
          <Container>
            <VideoSection />
          </Container>
        </section>
      </main>
    </>
  );
};


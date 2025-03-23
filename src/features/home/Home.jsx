import Container from "react-bootstrap/Container";
import InfoCards from "./InfoCards";
import FeatureSection from "./FeatureSection";
import ProfessionalCards from "../../shared/components/cards/ProfessionalCards";
import VideoSection from "./VideoSection";
import { ReserveBtn } from "../../shared/components/buttons/Buttons";
import "./home.css";

export default function Home() {
  return (
    <>
      <main>
        <section className="hero">
          <Container>
            <div className="hero-text">
              <h1>EspacioBox</h1>
              <h2>Servicio de arriendo de box </h2>
              <p>
                Bienvenidos a EspacioBox, un lugar construido para generar una
                comunidad de profesionales que puedan trabajar en un espacio
                privado, cómodo, acogedor y con una excelente ubicación,
                favoreciendo la calidad de vida tanto de sus consultantes como
                de ustedes.
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
        <section>
          <Container>
            <FeatureSection />
          </Container>
        </section>
        <section>
          <Container>
            <ProfessionalCards />
          </Container>
        </section>
        <section>
          <Container>
            <VideoSection />
          </Container>
        </section>
      </main>
    </>
  );
}

import { useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import InfoCards from "./InfoCards";
import FeatureSection from "./FeatureSection";
import ProfessionalCards from "../../shared/components/cards/ProfessionalCards";
import VideoSection from "./VideoSection";
import { ReserveLink } from "../../shared/components/links/CustomLinks";
import ReviewCalendarModal from "../../shared/components/modals/ReviewCalendarModal";
import { FaRegCalendarAlt } from "../../assets/icons/icons";
import "./home.css";

export default function Home() {
  const professionalsRef = useRef(null);
  const howItWorksRef = useRef(null);

  // Estado para controlar el modal
  const [showModal, setShowModal] = useState(false);

  // Funciones para abrir y cerrar el modal
  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  return (
    <>
      <main>
        <section className="hero">
          <Container>
            <div className="hero-text">
              <h1>Bienvenidos a EspacioBox</h1>
              <p>
                Creamos espacios para cuidar a quienes cuidan. Encuentra aquí tu
                box ideal, seguro, acogedor y funcional, pensado para
                profesionales de la salud que acompañan, sanan y transforman
                vidas.
              </p>
              <div className="hero-link-text">
                <ReserveLink /><p> tu espacio y sé parte de nuestra comunidad.</p>
              </div>
              {/* <div className="hero-link-text">
                <ReviewCalendarLink />
              </div> */}
              
                {/* <button className="btn btn-link" onClick={handleOpenModal}>
                  Ver calendario de reservas
                </button> */}
                <button id="hero-guest-btn" onClick={handleOpenModal}>
    <FaRegCalendarAlt />
    <span>REVISAR DISPONIBILIDAD</span>
  </button>
              
            </div>
          </Container>
        </section>
        <section>
          <Container>
            <InfoCards professionalsRef={professionalsRef} howItWorksRef={howItWorksRef} />
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
        <section ref={howItWorksRef} id="how-it-works-section">
          <Container>
            <FeatureSection />
          </Container>
        </section>
      </main>
      <ReviewCalendarModal show={showModal} handleClose={handleCloseModal} />
    </>
  );
}

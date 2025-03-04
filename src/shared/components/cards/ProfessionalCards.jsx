import { useEffect, useState } from "react";
import { fetchProfessionals } from "../../../services/api";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import ProfessionalCardModal from "../modals/ProfessionalCardModal";
import "./professionalCards.css";

export default function ProfessionalCards() {
  const [professionalCards, setProfessionalCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleShow = (card) => {
    setSelectedCard(card);
  };

  const handleClose = () => {
    setSelectedCard(null);
  };

  useEffect(() => {
    const getCards = async () => {
      const data = await fetchProfessionals();
      setProfessionalCards(data);
    };
    getCards();
  }, []);

  return (
    <>
      <div className="backgroundSection">
        <div className="professional-title">
        <h2>Conoce a nuestros profesionales</h2>
        <p>En Espaciobox, contamos con un equipo de profesionales de la salud altamente calificados, incluyendo psicólogos, nutricionistas y otros especialistas.</p>
        </div>
        <div className="scroll-container-professionals">
          <Row>
            {professionalCards.map((card) => (
              <Col key={card.id} xs={10} md={5} lg={3}>
                <Card>
                <Card.Img variant="top" src={card.image}/>
                  <Card.Body>
                    <Card.Title>{card.name}</Card.Title>
                    <Card.Subtitle className="card-subtitle">{card.title}</Card.Subtitle>
                    {/* <Card.Text className="text-multiline-truncate">{card.text}</Card.Text> */}
                  </Card.Body>
                    <Button variant="primary" onClick={() => handleShow(card)}>Ver más</Button>
                </Card>
              </Col>
            ))}
            {selectedCard && (
            <ProfessionalCardModal 
              show={selectedCard} 
              handleClose={handleClose} 
              card={selectedCard} 
            />
          )}
          </Row>
        </div>
      </div>
      </>
  );
}


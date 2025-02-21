import { useEffect, useState } from "react";
import { fetchProfessionals } from "../../../services/api";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import "./professionalCards.css";

const ProfessionalCards = () => {
  const [professionalCards, setProfessionalCards] = useState([]);

  useEffect(() => {
    const getCards = async () => {
      const data = await fetchProfessionals();
      setProfessionalCards(data);
    };
    getCards();
  }, []);

  return (
    <div className="scroll-container-professionals">
      <Row>
        {professionalCards.map((card) => (
          <Col key={card.id} xs={10} md={3}>
            <Card>
              <Card.Body>
                <Card.Title>{card.name}</Card.Title>
                <Card.Subtitle className="mb-4 card-subtitle">{card.title}</Card.Subtitle>
                <Card.Text>{card.text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProfessionalCards;

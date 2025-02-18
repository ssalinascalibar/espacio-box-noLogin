import { useEffect, useState } from "react";
import { fetchProfessionals } from "../../../services/api";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import "./ProfessionalCards.css";

const ProfessionalCards = () => {
  const [professionalCards, setProfessionalCards] = useState([]);
  console.log(professionalCards)

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
                <Card.Title>{card.title}</Card.Title>
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

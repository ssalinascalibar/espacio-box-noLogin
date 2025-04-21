import { useEffect, useState } from "react";
import { fetchData } from "../../services/api";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Link } from 'react-router-dom';
import "./infoCards.css";
import {
  MdVolunteerActivism,
  MdOutlineBadge,
  MdDateRange,
  MdOutlineLocationOn,
} from "../../assets/icons/icons";

const iconMap = {
  MdVolunteerActivism: <MdVolunteerActivism />,
  MdOutlineBadge: <MdOutlineBadge />,
  MdDateRange: <MdDateRange />,
  MdOutlineLocationOn: <MdOutlineLocationOn />,
};

export default function InfoCards({ professionalsRef, howItWorksRef }) {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const getCards = async () => {
      const data = await fetchData();
      setCards(data);
    };
    getCards();
  }, []);

  const handleScroll = (title) => {
    if (title === "Cómo funcionamos") {
      howItWorksRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (title === "Nuestros Profesionales") {
      professionalsRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="scroll-container">
      <Row>
        {cards.map((card) => (
          <Col key={card.id} xs={9} md={5} lg={3}>
            <Card>
              <Card.Body>
                {iconMap[card.icon]}
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.text}</Card.Text>
              </Card.Body>
              <Card.Footer>
                {card.link !== "" ? (
                <Link to={card.link} target={card.title !== "Como funcionamos" && card.title !== "Nuestros Profesionales" && card.title !== "¿Cómo Agendar?" ? "_blank" : undefined} rel="noopener noreferrer">{card.link_text}</Link>
                ) : (
                <Link onClick={() => handleScroll(card.title) }>
                  Ver más
                </Link>
                )}
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

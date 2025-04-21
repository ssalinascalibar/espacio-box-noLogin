import { useState, useEffect } from "react";
import { fetchBoxes } from "../../services/api";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import { FaArrowLeft, FaArrowRight } from "../../assets/icons/icons";
// import HorizontalGallery from "../../shared/components/gallery/HorizontalGallery";
import "./reserve.css";

export default function Reserve() {
  const [boxes, setBoxes] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState("Providencia");
  const [filteredBoxes, setFilteredBoxes] = useState([]);

  const days = [
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
    "Domingo",
  ];

  const hours = Array.from({ length: 14 }, (_, i) => `${i + 8}:00`);

  useEffect(() => {
      const getBoxes = async () => {
        const data = await fetchBoxes();
        setBoxes(data);
      };
      getBoxes();
    }, []);

    useEffect(() => {
      const filtered = boxes.filter((box) => box.location === selectedRoom);
      setFilteredBoxes(filtered);
    }, [selectedRoom, boxes]);

  return (
    <Container>
      <div className="backgroundSection">
        <Form.Select
          id="filter-room"
          name="filterRoom"
          aria-label="Filtrar por sede"
          value={selectedRoom}
          onChange={(e) => setSelectedRoom(e.target.value)}
        >
          <option>Filtrar por sede</option>
          <option value="Providencia">Sede Providencia</option>
          <option value="Las Condes">Sede Las Condes</option>
        </Form.Select>
        

        <Row className="mt-4">
                <h4>Boxes</h4>
                <Col >
                <div id="wrapper-gallery-boxes">
                {filteredBoxes.map((box, index) => (
                  <img
                    key={index}
                    src={box.original}
                    alt={`Box ${index}`}
                    className="me-2"
                    // style={{ height: '60%', objectFit: 'cover' }}
                  />
                ))}
                </div>
                </Col>
              </Row>



        <h4>Selecciona un box</h4>
        <div id="boxes">
          <div className="boxes-img">
            <Image src="/assets/img/box1-agendar.jpg" fluid />
            <h5>Box 1</h5>
          </div>
          <div className="boxes-img">
            <Image src="/assets/img/box2-agendar.jpg" fluid />
            <h5>Box 2</h5>
          </div>
          <div className="boxes-img">
            <Image src="/assets/img/box3-agendar.jpg" fluid />
            <h5>Box 3</h5>
          </div>
        </div>
        <div id="calendar">
          <h2>Agenda</h2>
          <div id="calendar-options">
            <h5>Tipo de reserva</h5>
            <Form>
              <div className="radio-group">
                <Form.Check
                  type="radio"
                  label="Por hora"
                  name="options"
                  value="option1"
                  id="option1"
                />
                <Form.Check
                  type="radio"
                  label="Jornada AM"
                  name="options"
                  value="option2"
                  id="option2"
                />
                <Form.Check
                  type="radio"
                  label="Jornada PM"
                  name="options"
                  value="option3"
                  id="option3"
                />
                <Form.Check
                  type="radio"
                  label="Día completo"
                  name="options"
                  value="option4"
                  id="option4"
                />
              </div>
            </Form>
          </div>
          <h4>Selecciona una hora en el calendario</h4>
          <div id="navigation-calendar">
            <button className="navigation-button">
              <FaArrowLeft />
            </button>
            <button className="navigation-button">
              <h5>Hoy</h5>
            </button>
            <button className="navigation-button">
              <FaArrowRight />
            </button>
          </div>
          <Table striped responsive>
            <thead>
              <tr>
                <th>Horas</th>
                {days.map((day) => (
                  <th key={day} className="text-center">
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {hours.map((hour) => (
                <tr key={hour}>
                  <td className="bold-td">{hour}</td>
                  {days.map((i) => (
                    <td key={i} className="text-center hover-td">
                      {hour}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </Table>
          <div id="calendar-footer">
            <Button variant="success" className="mt-2">
              Reservar
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
}

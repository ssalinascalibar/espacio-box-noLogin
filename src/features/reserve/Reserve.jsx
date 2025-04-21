import { useState, useEffect } from "react";
import { fetchBoxes } from "../../services/api";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {
  FaArrowLeft,
  FaArrowRight,
  FaRegTrashAlt,
} from "../../assets/icons/icons";
import "./reserve.css";

export default function Reserve() {
  const [boxes, setBoxes] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState("Providencia");
  const [filteredBoxes, setFilteredBoxes] = useState([]);
  const [selectedBox, setSelectedBox] = useState({});
  const [selectedBoxes, setSelectedBoxes] = useState([]);

  const [reservationType, setReservationType] = useState("option1"); // Tipo de reserva
  const [reservations, setReservations] = useState([]); // Reservas realizadas

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

  const handleSelectBox = (box) => {
    setSelectedBox(box);
    setSelectedBoxes([...selectedBoxes, selectedBox]);
  };

  useEffect(() => {
    const getBoxes = async () => {
      const data = await fetchBoxes();
      setBoxes(data);
    };
    getBoxes();
  }, []);

  useEffect(() => {
    let allowedIds = [];

    if (selectedRoom === "Providencia") {
      allowedIds = [5, 7, 12];
    } else if (selectedRoom === "Las Condes") {
      allowedIds = [];
    }

    const filtered = boxes.filter(
      (box) => box.location === selectedRoom && allowedIds.includes(box.id)
    );
    setFilteredBoxes(filtered);
  }, [selectedRoom, boxes]);

  useEffect(() => {
    setSelectedBox("");
  }, [selectedRoom]);

  const handleRemoveReservation = (resToRemove) => {
    const updatedReservations = reservations.filter(
      (res) =>
        !(
          res.day === resToRemove.day &&
          res.hour === resToRemove.hour &&
          res.selectedBox?.id === resToRemove.selectedBox?.id
        )
    );
    setReservations(updatedReservations);
  };

  const handleSelectTime = (day, hour) => {
    // Verificar si se ha seleccionado un box
    if (!selectedBox || Object.keys(selectedBox).length === 0) {
      alert("Por favor, selecciona un box antes de agendar.");
      return;
    }
    // Verificar si ya está reservada
    const isReserved = reservations.some(
      (res) => res.day === day && res.hour === hour
    );

    if (isReserved) {
      // Si ya está reservada, eliminarla del historial
      const updatedReservations = reservations.filter(
        (res) => !(res.day === day && res.hour === hour)
      );
      setReservations(updatedReservations);
    } else {
      // Si no está reservada, agregarla al historial
      let newReservations = [];
      if (reservationType === "option1") {
        // Por hora
        newReservations = [{ day, hour, selectedBox }];
      } else if (reservationType === "option2") {
        // Jornada AM (8:00 - 12:00)
        newReservations = hours
          .filter((h) => parseInt(h) >= 8 && parseInt(h) < 12)
          .map((h) => ({ day, hour: h, selectedBox }));
      } else if (reservationType === "option3") {
        // Jornada PM (12:00 - 18:00)
        newReservations = hours
          .filter((h) => parseInt(h) >= 12 && parseInt(h) < 18)
          .map((h) => ({ day, hour: h, selectedBox }));
      } else if (reservationType === "option4") {
        // Día completo (8:00 - 18:00)
        newReservations = hours.map((h) => ({ day, hour: h, selectedBox }));
      }

      setReservations([...reservations, ...newReservations]);
    }
  };

  return (
    <Container>
      <div className="backgroundSection">
        <Row className="my-4">
          <h4>Selecciona una sede</h4>
          <Col>
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
          </Col>
        </Row>

        <Row className="my-4">
          <h4>Selecciona un box</h4>
          <Col>
            <div id="wrapper-gallery-boxes">
              {filteredBoxes.length > 0 ? (
                filteredBoxes.map((box, index) => (
                  <div
                    key={index}
                    className="boxes-content"
                    onClick={() => handleSelectBox(box)}
                  >
                    <img src={box.original} alt={`Box ${index}`} />
                    <h5 style={{ marginTop: "0.2rem" }}>{box.originalTitle}</h5>
                  </div>
                ))
              ) : (
                <p>Imágenes no disponibles.</p>
              )}
            </div>
          </Col>
        </Row>

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
                  checked={reservationType === "option1"}
                  onChange={(e) => setReservationType(e.target.value)}
                />
                <Form.Check
                  type="radio"
                  label="Jornada AM"
                  name="options"
                  value="option2"
                  id="option2"
                  checked={reservationType === "option2"}
                  onChange={(e) => setReservationType(e.target.value)}
                />
                <Form.Check
                  type="radio"
                  label="Jornada PM"
                  name="options"
                  value="option3"
                  id="option3"
                  checked={reservationType === "option3"}
                  onChange={(e) => setReservationType(e.target.value)}
                />
                <Form.Check
                  type="radio"
                  label="Día completo"
                  name="options"
                  value="option4"
                  id="option4"
                  checked={reservationType === "option4"}
                  onChange={(e) => setReservationType(e.target.value)}
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
                  {days.map((day) => {
                    const isReserved = reservations.some(
                      (res) => res.day === day && res.hour === hour
                    );

                    return (
                      <td
                        key={day}
                        className={`text-center hover-td ${
                          isReserved ? "reserved" : ""
                        }`}
                        onClick={() => handleSelectTime(day, hour)}
                      >
                        {isReserved ? (
                          <>
                            {hour}
                            <br />
                            <span style={{ fontSize: "0.75rem" }}>
                              Reservado
                            </span>
                          </>
                        ) : (
                          hour
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </Table>
          <Row>
            <Col lg={5}>
              <div id="historyList">
                <h5>Horas seleccionadas</h5>
                <ul>
                  {reservations.map((res, index) => (
                    <li key={index}>
                      {res.day} - {res.hour} —{" "}
                      {res.selectedBox?.originalTitle || "Box no asignado"} (
                      {res.selectedBox?.location || "Ubicación desconocida"})
                      <FaRegTrashAlt
                        onClick={() => handleRemoveReservation(res)}
                        style={{
                          cursor: "pointer",
                          color: "red",
                          marginLeft: "10px",
                        }}
                        title="Eliminar reserva"
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
            <Col lg={7}></Col>
          </Row>
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

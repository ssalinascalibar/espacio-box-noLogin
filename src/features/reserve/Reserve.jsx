import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom"; 
import UserContext from "../../context/UserContext";
import AuthContext from "../../context/AuthContext";
import { fetchBoxes } from "../../services/api";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import TermsModal from "../../shared/components/modals/TermsModal";
import {
  FaArrowLeft,
  FaArrowRight,
  FaRegTrashAlt,
} from "../../assets/icons/icons";
import "./reserve.css";
import {
  startOfWeek,
  addDays,
  subWeeks,
  addWeeks,
  format,
  parseISO,
  endOfWeek,
} from "date-fns";
import { es } from "date-fns/locale"; // Para mostrar los días en español

export default function Reserve({ isGuest = false }) {
  const { reservations, setReservations, professionals } = useContext(UserContext);
  const { registeredUser } = useContext(AuthContext);
  const [boxes, setBoxes] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState("Guardia Vieja");
  const [filteredBoxes, setFilteredBoxes] = useState([]);
  const [selectedBox, setSelectedBox] = useState({});
  const [selectedBoxes, setSelectedBoxes] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [reservationType, setReservationType] = useState("option1"); // Tipo de reserva
  const [showTerms, setShowTerms] = useState(false);
  const [userReservations, setUserReservations] = useState([]);
  const [selectedReservations, setSelectedReservations] = useState([]);

  const navigate = useNavigate();

  const [currentWeekStart, setCurrentWeekStart] = useState(
    startOfWeek(new Date(), { weekStartsOn: 1 })
  );

  const weekDays = Array.from({ length: 7 }).map((_, index) =>
    addDays(currentWeekStart, index)
  );

  const goToPreviousWeek = () => {
    setCurrentWeekStart((prev) => subWeeks(prev, 1));
  };

  const goToNextWeek = () => {
    setCurrentWeekStart((prev) => addWeeks(prev, 1));
  };

  const goToToday = () => {
    setCurrentWeekStart(startOfWeek(new Date(), { weekStartsOn: 1 }));
  };

  const isReservationReady = selectedBox?.id && selectedReservations.length > 0;

  useEffect(() => {
    if (isGuest) {
      // Mostrar TODAS las reservas al invitado
      setUserReservations(reservations);
    } else {
      const userBooking = reservations.filter(
        (r) => r.email === registeredUser.email
      );
      setUserReservations(userBooking);
    }
  }, [isGuest, registeredUser.email, reservations]);

  // useEffect(() => {
  //   const userBooking = reservations.filter(
  //     (r) => r.email === registeredUser.email
  //   );
  //   setUserReservations(userBooking);
  // }, [registeredUser.email, reservations]);

  useEffect(() => {
    const user = reservations.find((r) => r.email === registeredUser.email);
    setCurrentUser(user);
  }, [registeredUser.email, reservations]);

  const hours = Array.from({ length: 14 }, (_, i) => `${i + 8}:00`);

  const handleCloseTerms = () => setShowTerms(false);

  const handleAcceptTerms = () => {
    const newId =
      reservations && reservations.length > 0
        ? Math.max(...reservations.map((r) => r.id || 0)) + 1
        : 1;

    // Filtrar solo las nuevas reservas que no estén en userReservations
    const filteredNewReservations = selectedReservations.filter((newRes) => {
      return !userReservations.some(
        (existingRes) =>
          existingRes.room === newRes.selectedBox?.description &&
          existingRes.start_time === newRes.hour &&
          existingRes.location === newRes.selectedBox?.location
      );
    });

    const selectedReservationsWithIds = filteredNewReservations.map(
      (res, index) => {
        const { selectedBox, ...rest } = res;

        const professional = professionals?.find(
          (p) => p.email === currentUser.email
        );

        return {
          ...rest,
          id: newId + index,
          name: currentUser.name,
          paternal_surname: currentUser.paternal_surname,
          maternal_surname: currentUser.maternal_surname || "",
          email: registeredUser.email,
          hourly_rate: professional.hourly_rate,
          ispayed: false,
          room: selectedBox?.description,
          location: selectedBox?.location,
        };
      }
    );

    // Actualizar estado global y del usuario
    setReservations([...reservations, ...selectedReservationsWithIds]);

    setUserReservations([...userReservations, ...selectedReservationsWithIds]);

    setSelectedReservations([]);
    alert("Reserva exitosa");
    setShowTerms(false);
  };

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

    if (selectedRoom === "Guardia Vieja") {
      allowedIds = [5, 7, 12];
    } else if (selectedRoom === "Avenida Providencia") {
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
    const updatedReservations = selectedReservations.filter(
      (res) =>
        !(
          res.date === resToRemove.date &&
          res.start_time === resToRemove.start_time &&
          res.selectedBox?.id === resToRemove.selectedBox?.id
        )
    );
    setSelectedReservations(updatedReservations);
  };

  const handleSelectTime = (date, start_time) => {
    // Verificar si se ha seleccionado un box
    if (!selectedBox || Object.keys(selectedBox).length === 0) {
      alert("Por favor, selecciona un box antes de agendar.");
      return;
    }

    const dateStr = format(date, "yyyy-MM-dd");

    const isAlreadyConfirmed = userReservations.some(
      (res) => res.date === dateStr && res.start_time === start_time
    );
    if (isAlreadyConfirmed) {
      alert("Esta hora ya está reservada y no se puede volver a seleccionar.");
      return;
    }

    const isReserved = selectedReservations.some(
      (res) => res.date === dateStr && res.start_time === start_time
    );

    if (isReserved) {
      const updatedReservations = selectedReservations.filter(
        (res) => !(res.date === dateStr && res.start_time === start_time)
      );
      setSelectedReservations(updatedReservations);
    } else {
      let newReservations = [];

      const reservationBlock = (start, end) =>
        hours
          .filter((h) => {
            const hourInt = parseInt(h);
            return hourInt >= start && hourInt < end;
          })
          .map((h) => ({ date: dateStr, start_time: h, selectedBox }));

      if (reservationType === "option1") {
        newReservations = [{ date: dateStr, start_time, selectedBox }];
      } else if (reservationType === "option2") {
        newReservations = reservationBlock(8, 12);
      } else if (reservationType === "option3") {
        newReservations = reservationBlock(12, 18);
      } else if (reservationType === "option4") {
        newReservations = hours.map((h) => ({
          date: dateStr,
          start_time: h,
          selectedBox,
        }));
      }

      setSelectedReservations([...selectedReservations, ...newReservations]);
    }
  };

  const handleReserveClick = () => {
    if (isGuest) {
      alert("Debes estar registrado para realizar una reserva. Te redirigiremos ");
      navigate("/userlogin");
      return;
    }
    setShowTerms(true);
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
              <option value="Guardia Vieja">Sede Guardia Vieja</option>
              <option value="Avenida Providencia">Sede Avenida Providencia</option>
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
                    className={`boxes-content ${
                      selectedBox?.id === box.id ? "selected-box" : ""
                    } ${isGuest ? "guest-box" : ""}`}
                    onClick={() => handleSelectBox(box)}
                  >
                    {!isGuest && (
                    <img src={box.original} alt={`Box ${index}`} />
                    )}
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
            <button className="navigation-button" onClick={goToPreviousWeek}>
              <FaArrowLeft />
            </button>
            <button className="navigation-button" onClick={goToToday}>
              <h5>
                Semana del {format(currentWeekStart, "dd-MM-yyyy")} al{" "}
                {format(
                  endOfWeek(currentWeekStart, { weekStartsOn: 1 }),
                  "dd-MM-yyyy"
                )}
              </h5>
            </button>
            <button className="navigation-button" onClick={goToNextWeek}>
              <FaArrowRight />
            </button>
          </div>
          <div style={{ textAlign: "center" }}>
            <h5>
              {format(currentWeekStart, "MMMM yyyy", { locale: es }).replace(
                /^./,
                (c) => c.toUpperCase()
              )}
            </h5>
          </div>
          {isGuest && (
            <p style={{ fontStyle: "italic", color: "gray" }}>
              Estás viendo el calendario como invitado. Puedes visualizar reservas, pero debes iniciar sesión para agendar.
            </p>
          )}
          <Table striped responsive>
            <thead>
              <tr>
                <th>Horas</th>
                {weekDays.map((date) => (
                  <th key={format(date, "yyyy-MM-dd")} className="text-center">
                    {format(date, "EEEE dd/MM", { locale: es })}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {hours.map((start_time) => (
                <tr key={start_time}>
                  <td className="bold-td">{start_time}</td>
                  {weekDays.map((date) => {
                    const dateStr = format(date, "yyyy-MM-dd");
                    // const isReserved = selectedReservations.some(
                    //   (res) =>
                    //     res.date === dateStr && res.start_time === start_time
                    // );
                    const isReserved =
                      selectedReservations.some(
                        (res) =>
                          res.date === dateStr && res.start_time === start_time
                      ) ||
                      userReservations.some(
                        (res) =>
                          res.date === dateStr && res.start_time === start_time
                      );

                    return (
                      <td
                        key={dateStr}
                        className={`text-center hover-td ${
                          isReserved ? "reserved" : ""
                        }`}
                        onClick={() => handleSelectTime(date, start_time)}
                      >
                        {isReserved ? (
                          <>
                            {start_time}
                            <br />
                            <span style={{ fontSize: "0.75rem" }}>
                              Reservado
                            </span>
                          </>
                        ) : (
                          start_time
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
                  {selectedReservations.map((res, index) => (
                    <li key={index}>
                      {format(parseISO(res.date), "dd-MM-yyyy")} -{" "}
                      {res.start_time} —{" "}
                      {res.selectedBox?.originalTitle ||
                        res.room ||
                        "Box no asignado"}{" "}
                      (
                      {res.selectedBox?.location ||
                        res.location ||
                        "Ubicación desconocida"}
                      )
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
            {!isGuest && (
            <Col lg={7}>
              <div id="historyList">
                <h5>Mis reservas {userReservations.length}</h5>
                <ul>
                  {userReservations.map((res, index) => (
                    <li key={index}>
                      {format(parseISO(res.date), "dd-MM-yyyy")} -{" "}
                      {res.start_time} —{" "}
                      {res.selectedBox?.originalTitle ||
                        res.room ||
                        "Box no asignado"}{" "}
                      (
                      {res.selectedBox?.location ||
                        res.location ||
                        "Ubicación desconocida"}
                      )
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
            )}
          </Row>
          <div id="calendar-footer">
            <Button
              variant="success"
              className="mt-2"
              onClick={handleReserveClick}
              disabled={!isReservationReady}
            >
              Reservar
            </Button>
          </div>
          <TermsModal
            show={showTerms}
            handleClose={handleCloseTerms}
            handleAccept={handleAcceptTerms}
          />
        </div>
      </div>
    </Container>
  );
}

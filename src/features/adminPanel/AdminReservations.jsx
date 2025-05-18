import { useState, useEffect, useContext } from "react";
import UserContext from "../../context/UserContext";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ReservationCalendar from "./components/ReservationCalendar";
import CreateReserveModal from "../../shared/components/modals/CreateReserveModal";
import "./adminPanel.css";

export default function AdminReservations({ professionals }) {
  const { reservations, setReservations } = useContext(UserContext);

  const [selectedUser, setSelectedUser] = useState("");
  const [selectedRoom, setSelectedRoom] = useState("");
  const [filteredReservations, setFilteredReservations] = useState([]);
  
  console.log(filteredReservations)

  const [view, setView] = useState("tabla");
  
  const [showModal, setShowModal] = useState(false);

  const addPayment = (id) => {
    const updatedReservations = reservations.map((p) =>
      p.id === id ? { ...p, ispayed: !p.ispayed } : p
    );
    setReservations(updatedReservations);

    let updatedFiltered = updatedReservations;

    if (selectedUser) {
      updatedFiltered = updatedFiltered.filter(
        (p) => p.name + p.paternal_surname === selectedUser
      );
    }

    setFilteredReservations(updatedFiltered);
  };

  const clean = () => {
    setFilteredReservations(reservations);
    setSelectedUser("");
    setSelectedRoom("");
  };

const seenNames = new Set();
const uniqueUsers = reservations.filter((res) => {
  if (seenNames.has(res.name)) return false;
  seenNames.add(res.name);
  return true;
});

  const handleCreateReservation = (newReservation) => {
    const newId =
      reservations && reservations.length > 0
        ? Math.max(...reservations.map((r) => r.id)) + 1
        : 1;

    // Crear un nuevo registro 
    const newRecord = {
      id: newId,
      room: newReservation.room,
      name: newReservation.professional.name,
      paternal_surname: newReservation.professional.paternal_surname || "",
      maternal_surname: newReservation.professional.maternal_surname || "",
      email: newReservation.professional.email || "",
      date: newReservation.date,
      start_time: newReservation.start_time || "",
      hourly_rate: newReservation.professional.hourly_rate,
      ispayed: newReservation.ispayed,
      location: newReservation.location
    };

    // Actualizar el estado con el nuevo registro
    setReservations([...reservations, newRecord]);
  };

  useEffect(() => {
    let updatedList = reservations;

    if (selectedUser) {
      updatedList = updatedList.filter(
        (p) => p.name + p.paternal_surname === selectedUser
      );
    }

    if (selectedRoom) {
      updatedList = updatedList.filter((p) => p.room === selectedRoom || p.selectedBox?.description === selectedRoom);
    }

    setFilteredReservations(updatedList);
  }, [reservations, selectedUser, selectedRoom]);

  const handleDateChange = (id, newDate) => {
    const newReservations = reservations.map((reserve) =>
      reserve.id === id ? { ...reserve, date: newDate } : reserve
    );
    setReservations(newReservations);
  };

  const handleTimeChange = (id, newTime) => {
    const newReservations = reservations.map((reserve) =>
      reserve.id === id ? { ...reserve, start_time: newTime } : reserve
    );
    setReservations(newReservations);
  };

  const handleRoomChange = (id, newRoom) => {
    const newReservations = reservations.map((res) =>
      res.id === id ? { ...res, room: newRoom } : res
    );
    setReservations(newReservations);
  };

  const formatTime = (time) => {
    if (!time) return "";
    const [hh, mm] = time.split(":");
    return `${hh.padStart(2, "0")}:${mm || "00"}`;
  };

  return (
    <div id="background-admin">
      <div id="filter-reservations">
        <Form.Select
          id="filter-room"
          name="filterRoom"
          aria-label="Filtrar por box"
          value={selectedRoom}
          onChange={(e) => setSelectedRoom(e.target.value)}
        >
          <option>Filtrar por box</option>
          <option value="Box 1">Box 1</option>
          <option value="Box 2">Box 2</option>
          <option value="Box 3">Box 3</option>
        </Form.Select>
        <Form.Select
          id="filter-user"
          name="filterUser"
          aria-label="Filtrar por usuario"
          value={selectedUser}
          onChange={(e) => setSelectedUser(e.target.value)}
        >
          <option>Filtrar por usuario</option>
          {uniqueUsers.map((p, i) => (
            <option key={i} value={p.name + p.paternal_surname}>
              {p.name} {p.paternal_surname}
            </option>
          ))}
        </Form.Select>
      </div>
      <div id="table-title">
        <h2>Reservas</h2>
        <div id="table-title-btn">
          <Button variant="info" className="mb-4"  onClick={() => setView("tabla")}>
            Ver Tabla
          </Button>
          <Button variant="info" className="mb-4" onClick={() => setView("calendario")}>
            Ver Calendario
          </Button>
          <Button variant="secondary" className="mb-4" onClick={clean}>
            Limpiar
          </Button>
          <Button
            variant="success"
            className="mb-4"
            onClick={() => setShowModal(true)}
          >
            Nueva reserva
          </Button>
        </div>
      </div>
      
      {view === "tabla" && (
        <div id="admin-table">
          <Table striped>
            <thead>
              <tr>
                <th>Id</th>
                <th style={{ minWidth: "180px" }}>Box</th>
                <th>Usuario</th>
                <th>Fecha</th>
                <th>Hora Inicio</th>
                <th>Valor</th>
                <th>Pagados</th>
              </tr>
            </thead>
            <tbody>
              {filteredReservations?.map((p, i) => (
                <tr key={i}>
                  <td>{p.id}</td>
                  <td>
                    <Form.Select
                      aria-label="Seleccionar box"
                      id={`row-sala-${p.id}`}
                      name={`rowSala${p.id}`}
                      value={p.room || p.selectedBox?.description}
                      onChange={(e) => handleRoomChange(p.id, e.target.value)}
                    >
                      <option value="">Box</option>
                      <option value="Box 1">Box 1</option>
                      <option value="Box 2">Box 2</option>
                      <option value="Box 3">Box 3</option>
                    </Form.Select>
                  </td>
                  <td>
                    {p.name} {p.paternal_surname} {p.maternal_surname}
                  </td>
                  <td>
                    <Form.Control
                      type="date"
                      value={p.date}
                      onChange={(e) => handleDateChange(p.id, e.target.value)}
                    />
                  </td>
                  <td>
                    <Form.Control
                      type="time"
                      // value={p.start_time || ""}
                      value={formatTime(p.start_time)}
                      onChange={(e) => handleTimeChange(p.id, e.target.value)}
                    />
                  </td>
                  <td>{p.hourly_rate}</td>
                  <td>
                    <Form.Check
                      type="checkbox"
                      id={`payment-${p.id}`}
                      name={`payment-${p.id}`}
                      checked={p.ispayed}
                      onChange={() => addPayment(p.id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
        )}

      {view === "calendario" && <ReservationCalendar bookings={filteredReservations}/>}
      <CreateReserveModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        professionals={professionals}
        onCreateReservation={handleCreateReservation}
      />
    </div>
  );
}

import { useState, useEffect, useContext } from "react";
import UserContext from "../../context/UserContext";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import CreateReserveModal from "../../shared/components/modals/CreateReserveModal";
import "./adminPanel.css";

export default function AdminReservations({ professionals }) {
  const { reservations, setReservations } = useContext(UserContext);

  const [selectedUser, setSelectedUser] = useState("");
  const [selectedRoom, setSelectedRoom] = useState("");
  const [filteredReservations, setFilteredReservations] = useState([]);
  

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

  const handleCreateReservation = (newReservation) => {
    const newId =
      reservations && reservations.length > 0
        ? Math.max(...reservations.map((r) => r.id)) + 1
        : 1;

    // Crear un nuevo registro con las propiedades necesarias
    const newRecord = {
      id: newId,
      room: newReservation.room,
      name: newReservation.professional.name,
      paternal_surname: newReservation.professional.paternal_surname || "",
      date: newReservation.date,
      start_time: newReservation.start_time,
      hourly_rate: newReservation.professional.hourly_rate,
      ispayed: newReservation.ispayed,
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
      updatedList = updatedList.filter((p) => p.room === selectedRoom);
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

  return (
    <div id="background-admin">
      <div id="filter-reservations">
        <Form.Select
          id="filter-room"
          name="filterRoom"
          aria-label="Filtrar por sala"
          value={selectedRoom}
          onChange={(e) => setSelectedRoom(e.target.value)}
        >
          <option>Filtrar por sala</option>
          <option value="Sala 1">Sala 1</option>
          <option value="Sala 2">Sala 2</option>
          <option value="Sala 3">Sala 3</option>
        </Form.Select>
        <Form.Select
          id="filter-user"
          name="filterUser"
          aria-label="Filtrar por usuario"
          value={selectedUser}
          onChange={(e) => setSelectedUser(e.target.value)}
        >
          <option>Filtrar por usuario</option>
          {reservations.map((p, i) => (
            <option key={i} value={p.name + p.paternal_surname}>
              {p.name} {p.paternal_surname}
            </option>
          ))}
        </Form.Select>
      </div>
      <div id="table-title">
        <h2>Reservas</h2>
        <div id="table-title-btn">
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
      <div id="admin-table">
        <Table striped>
          <thead>
            <tr>
              <th>Id</th>
              <th style={{ minWidth: "180px" }}>Sala</th>
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
                    aria-label="Seleccionar sala"
                    id={`row-sala-${p.id}`}
                    name={`rowSala${p.id}`}
                    value={p.room || ""}
                    onChange={(e) => handleRoomChange(p.id, e.target.value)}
                  >
                    <option value="">Salas</option>
                    <option value="Sala 1">Sala 1</option>
                    <option value="Sala 2">Sala 2</option>
                    <option value="Sala 3">Sala 3</option>
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
                    value={p.start_time}
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
      <CreateReserveModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        professionals={professionals}
        onCreateReservation={handleCreateReservation}
      />
    </div>
  );
}

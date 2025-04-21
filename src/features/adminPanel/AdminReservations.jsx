import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./adminPanel.css";

export default function AdminReservations({ professionals, setProfessionals }) {
  const [selectedUser, setSelectedUser] = useState("");
  const [selectedRoom, setSelectedRoom] = useState("");
  const [filteredProfessionals, setFilteredProfessionals] = useState([]);

  // const addPayment = (id) => {
  //   const index = professionals.findIndex(
  //     (professional) => professional.id === id
  //   );
  //   professionals[index].ispayed = !professionals[index].ispayed;
  //   setProfessionals([...professionals]);
  // };

  const addPayment = (id) => {
    const updatedProfessionals = professionals.map((p) =>
      p.id === id ? { ...p, ispayed: !p.ispayed } : p
    );
    setProfessionals(updatedProfessionals);
  
    let updatedFiltered = updatedProfessionals;
  
    if (selectedUser) {
      updatedFiltered = updatedFiltered.filter(
        (p) => p.name + p.paternal_surname === selectedUser
      );
    }
  
    if (selectedRoom) {
      updatedFiltered = updatedFiltered.filter(
        (p) => p.room === selectedRoom
      );
    }
  
    setFilteredProfessionals(updatedFiltered);
  };

  const handleFilter = () => {
    if (!selectedUser) {
      alert("No hay selección");
      return;
    }

    const filtered = professionals.filter(
      (p) => p.name + p.paternal_surname === selectedUser
    );

    setFilteredProfessionals(filtered);
  };

  const clean = () => {
    setFilteredProfessionals(professionals);
    setSelectedUser("");
    setSelectedRoom("");
  };

  
  useEffect(() => {
    let updatedList = professionals;
  
    if (selectedUser) {
      updatedList = updatedList.filter(
        (p) => p.name + p.paternal_surname === selectedUser
      );
    }
  
    if (selectedRoom) {
      updatedList = updatedList.filter((p) => p.room === selectedRoom);
    }
  
    setFilteredProfessionals(updatedList);
  }, [professionals, selectedUser, selectedRoom]);

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
          <option value="1">Sala 1</option>
          <option value="2">Sala 2</option>
          <option value="3">Sala 3</option>
        </Form.Select>
        <Form.Select
          id="filter-user"
          name="filterUser"
          aria-label="Filtrar por usuario"
          value={selectedUser}
          onChange={(e) => setSelectedUser(e.target.value)}
        >
          <option>Filtrar por usuario</option>
          {professionals.map((p, i) => (
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
          <Button variant="primary" className="mb-4" onClick={handleFilter}>
            Filtrar
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
            {filteredProfessionals?.map((p, i) => (
              <tr key={i}>
                <td>{p.id}</td>
                <td>
                  <Form.Select aria-label="Seleccionar sala tabla" id={`row-sala-${p.id}`} name={`rowSala${p.id}`}>
                    <option>Salas</option>
                    <option value="1">Sala 1</option>
                    <option value="2">Sala 2</option>
                    <option value="3">Sala 3</option>
                  </Form.Select>
                </td>
                <td>
                  {p.name} {p.paternal_surname} {p.maternal_surname}
                </td>
                <td>
                  <Form.Control type="date" />
                </td>
                <td>
                  <Form.Control type="time" />
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
    </div>
  );
}

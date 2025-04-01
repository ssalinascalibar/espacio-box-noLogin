import { useState } from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./adminPanel.css";

export default function AdminReservations({ professionals, setProfessionals }) {
  const [selectedUser, setSelectedUser] = useState({});

  const addPayment = (id) => {
    const index = professionals.findIndex(
      (professional) => professional.id === id
    );
    professionals[index].ispayed = !professionals[index].ispayed;
    setProfessionals([...professionals]);
  };

  return (
    <div id="background-admin">
      <div id="filter-reservations">
        <Form.Select aria-label="Filtrar por sala">
          <option>Filtrar por sala</option>
          <option value="1">Sala 1</option>
          <option value="2">Sala 2</option>
          <option value="3">Sala 3</option>
        </Form.Select>
        <Form.Select aria-label="Filtrar por sala" value={selectedUser} onChange={(e) => setSelectedUser(e.target.value)}>
          <option>Filtrar por usuario</option>
          {professionals.map((p, i) => (
            <option key={i} value={p.name}>{p.name} {p.paternal_surname}</option>
          ))}
        </Form.Select>
      </div>
      <div id="table-title">
        <h2>Reservas</h2>
        <Button variant="primary" className="mb-4">
          Filtrar
        </Button>
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
            {professionals.map((p, i) => (
              <tr key={i}>
                <td>{p.id}</td>
                <td>
                  <Form.Select aria-label="Seleccionar sala">
                    <option>Salas</option>
                    <option value="1">Sala 1</option>
                    <option value="2">Sala 2</option>
                    <option value="3">Sala 3</option>
                  </Form.Select>
                </td>
                <td>
                  {p.name} {p.paternal_surname} {p.maternal_surname}
                </td>
                <td>Fecha</td>
                <td>17:00hrs</td>
                <td>{p.hourly_rate}</td>
                <td>
                  <Form.Check
                    type="checkbox"
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

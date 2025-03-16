import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import {
  FaRegEdit,
  // MdAddCircleOutline,
  FaRegTrashAlt,
} from "../../assets/icons/icons";
import { fetchProfessionals } from "../../services/api";
import CreateProfessionalModal from "../../shared/components/modals/CreateProfessionalModal";
import "./adminPanel.css";

export default function AdminPanel() {
  const [professionals, setProfessionals] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const getUsers = async () => {
      const data = await fetchProfessionals();
      setProfessionals(data);
    };
    getUsers();
  }, []);

  return (
    <Container>
      <div id="professionals-table">
        <h2>Tabla de profesionales</h2>
        <Button variant="success" onClick={handleShow} className="mb-4">
            Agregar profesional
          </Button>
        <Table striped responsive>
          <thead>
            <tr>
              <th>Id</th>
              <th>Nombre</th>
              <th>Apellido paterno</th>
              <th>Apellido materno</th>
              <th>Rut</th>
              <th>Fono</th>
              <th>Email</th>
              <th>Título</th>
              <th>Descripción</th>
              <th>Valor hora</th>
              <th>Clave acceso</th>
              <th>Imagen</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {professionals.map((p, i) => (
              <tr key={i}>
                <td>{p.id}</td>
                <td>{p.name}</td>
                <td>{p.paternal_surname}</td>
                <td>{p.maternal_surname}</td>
                <td>{p.rut}</td>
                <td>{p.phone}</td>
                <td>{p.email}</td>
                <td>{p.title}</td>
                <td>
                  <div className="custom-cell-content">{p.text}</div>
                </td>
                <td>{p.hourly_rate}</td>
                <td>{p.password}</td>
                <td>{p.image}</td>
                <td>
                  <div id="actions">
                    {/* <MdAddCircleOutline /> */}
                    <FaRegEdit />
                    <FaRegTrashAlt />
                  </div>
                </td>
              </tr>
            ))}
            <CreateProfessionalModal show={show} handleClose={handleClose} professionals={professionals} setProfessionals={setProfessionals}/>
          </tbody>
        </Table>
      </div>
    </Container>
  );
}

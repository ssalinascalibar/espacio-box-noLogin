import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import {
  FaRegEdit,
  MdAddCircleOutline,
  FaRegTrashAlt,
} from "../../assets/icons/icons";
import { fetchProfessionals } from "../../services/api";
import CreateProfessionalModal from "../../shared/components/modals/CreateProfessionalModal";
import "./adminPanel.css";

export default function AdminPanel() {
  const [professionals, setProfessionals] = useState([]);
  const [show, setShow] = useState(false);
  console.log(show)

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
        <Table striped responsive>
          <thead>
            <tr>
              <th>Id</th>
              <th>Nombre</th>
              <th>Título</th>
              <th>Descripción</th>
              <th>Imagen</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {professionals.map((p, i) => (
              <tr key={i}>
                <td>{p.id}</td>
                <td>{p.name}</td>
                <td>{p.title}</td>
                <td>
                  <div className="custom-cell-content">{p.text}</div>
                </td>
                <td>{p.image}</td>
                <td>
                  <div id="actions">
                    <MdAddCircleOutline onClick={handleShow} />
                    <FaRegEdit />
                    <FaRegTrashAlt />
                  </div>
                </td>
              </tr>
            ))}
            <CreateProfessionalModal  show={show} handleClose={handleClose}/>
          </tbody>
        </Table>
      </div>
    </Container>
  );
}

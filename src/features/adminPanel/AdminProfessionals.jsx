import { useState } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import {
  FaRegEdit,
  FaRegTrashAlt,
} from "../../assets/icons/icons";
import CreateProfessionalModal from "../../shared/components/modals/CreateProfessionalModal";
import UpdateProfessionalModal from "../../shared/components/modals/UpdateProfessionalModal";
import DeleteProfessionalModal from "../../shared/components/modals/DeleteProfessionalModal";
import "./adminPanel.css";

export default function AdminProfessionals({ professionals, setProfessionals }) {
  
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const [selectedProfessional, setSelectedProfessional] = useState({});
  
  const handleCloseUpdateModal = () => setShowUpdateModal(false);
  const handleShowUpdateModal = () => setShowUpdateModal(true);
  const handleCloseCreateModal = () => setShowCreateModal(false);
  const handleShowCreateModal = () => setShowCreateModal(true);
  const handleShowDeleteModal = () => setShowDeleteModal(true);
  const handleCloseDeleteModal = () => setShowDeleteModal(false);

  const selectProfessional = async (selection) => {
    setSelectedProfessional(selection);
  };

  return (
    <div id="background-admin">
      <div id="table-title">
        <h2>Tabla de profesionales</h2>
        <Button
          variant="success"
          onClick={handleShowCreateModal}
          className="mb-4"
        >
          Agregar profesional
        </Button>
      </div>
      <div id="admin-table">
        <Table striped>
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
              <th>Certificado</th>
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
                <td>{p.certificate ? (
                    <a
                      href={URL.createObjectURL(p.certificate)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ver certificado
                    </a>
                  ) : (
                    "No disponible"
                  )}</td>
                <td>
                  <div className="custom-cell-content">{p.text}</div>
                </td>
                <td>{p.hourly_rate}</td>
                <td>{p.password}</td>
                <td>
                  <img
                    src={p.image}
                    alt="Imagen"
                    className="responsive-image"
                  />
                </td>
                <td>
                  <div id="actions">
                    {/* <MdAddCircleOutline /> */}
                    <FaRegEdit
                      onClick={() => {
                        selectProfessional(p);
                        handleShowUpdateModal();
                      }}
                    />
                    <FaRegTrashAlt 
                      onClick={() => {
                        selectProfessional(p);
                        handleShowDeleteModal();
                      }}
                    />
                  </div>
                </td>
              </tr>
            ))}
            <CreateProfessionalModal
              show={showCreateModal}
              handleClose={handleCloseCreateModal}
              professionals={professionals}
              setProfessionals={setProfessionals}
            />
            <UpdateProfessionalModal
              show={showUpdateModal}
              handleClose={handleCloseUpdateModal}
              professionals={professionals}
              setProfessionals={setProfessionals}
              selectedProfessional={selectedProfessional}
              setSelectedProfessional={setSelectedProfessional}
            />
            <DeleteProfessionalModal 
              show={showDeleteModal}
              handleClose={handleCloseDeleteModal}
              professionals={professionals}
              setProfessionals={setProfessionals}
              selectedProfessional={selectedProfessional}
              />
          </tbody>
        </Table>
      </div>
    </div>
  );
}

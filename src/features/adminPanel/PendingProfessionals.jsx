import {useState, useContext, useEffect } from "react";
import AuthContext from "../../context/AuthContext";
import UserContext from "../../context/UserContext";
import Table from "react-bootstrap/Table";
import { MdOutlineCancel, MdOutlineCheckCircle } from "../../assets/icons/icons";
import ConfirmApprovalModal from "../../shared/components/modals/ConfirmApprovalModal";
import ConfirmDeleteModal from "../../shared/components/modals/ConfirmDeleteModal";
import "./adminPanel.css";

import { fetchUsers } from "../../services/api";

export default function PendingProfessionals() {
  const { users, setUsers } = useContext(AuthContext);
  const { professionals, setProfessionals } = useContext(UserContext);

  const [showApprovalModal, setShowApprovalModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null); 

  const defaultIUserImage = "/assets/img/user.jpg";

  const pendingUsers = users.filter(
    (user) => user.status === "Pendiente"
  );
 
  useEffect(() => {
      if (users.length === 0) {
        const getUsers = async () => {
          const data = await fetchUsers();
          setUsers(data);
        };
        getUsers();
      }
    }, [users, setUsers]);

    const addUserToProfessionals = (selection) => {

      const newId =
        professionals && professionals.length > 0
          ? Math.max(...professionals.map((p) => p.id)) + 1
          : 1;
  
      const newProfessional = {
        ...selection,
        id: newId,
        image: selection.image && selection.image.trim() !== "" ? selection.image : defaultIUserImage,
        status: "Aprobado",
      };

      setProfessionals([...professionals, newProfessional]);
    };

    const changeStatusUser = (id) => {
      const index = users.findIndex(
        (user) => user.id === id
      );
      console.log(index);
      users[index].status = users[index].status === "Pendiente" ? "Aprobado" : "Pendiente";
      setUsers([...users]);
    }

    const deleteUser = (id) => {
      const updatedUsers = users.filter((user) => user.id !== id);
      setUsers(updatedUsers);
  
      console.log(`Usuario con ID ${id} eliminado.`);
    };
  
    const handleApproveClick = (user) => {
      setSelectedUser(user);
      setShowApprovalModal(true); 
    };
  
    const handleDeleteClick = (user) => {
      setSelectedUser(user);
      setShowDeleteModal(true); 
    };
  
    const handleConfirmApproval = () => {
      if (selectedUser) {
        addUserToProfessionals(selectedUser);
        changeStatusUser(selectedUser.id);
      }
      setShowApprovalModal(false);
      setSelectedUser(null); 
    };
  
    const handleConfirmDelete = () => {
      if (selectedUser) {
        deleteUser(selectedUser.id);
      }
      setShowDeleteModal(false);
      setSelectedUser(null); 
    };
  
    const handleCloseApprovalModal = () => {
      setShowApprovalModal(false);
      setSelectedUser(null); 
    };
  
    const handleCloseDeleteModal = () => {
      setShowDeleteModal(false); 
      setSelectedUser(null); 
    };

  return (
    <div id="background-admin">
      <div id="table-title">
        <h2>Tabla pendientes aprobación</h2>
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
              <th>Clave acceso</th>
              
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {pendingUsers?.map((p, i) => (
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
                <td>{p.password}</td>
                <td>
                  <div id="actions">
                    <MdOutlineCheckCircle
                      onClick={() => handleApproveClick(p)} 
                      className="approve-pending-btn"
                    />
                    <MdOutlineCancel
                    onClick={() => handleDeleteClick(p)}
                    className="cancel-pending-btn"
                    />
                  </div>
                </td>
              </tr>
            ))}
             <ConfirmApprovalModal
              show={showApprovalModal}
              handleClose={handleCloseApprovalModal}
              handleConfirm={handleConfirmApproval}
              user={selectedUser}
            />
             <ConfirmDeleteModal
              show={showDeleteModal}
              handleClose={handleCloseDeleteModal}
              handleConfirm={handleConfirmDelete}
              user={selectedUser}
      />
          </tbody>
        </Table>
      </div>
    </div>
  );
}

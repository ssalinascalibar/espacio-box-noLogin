import { useContext, useEffect } from "react";
import AuthContext from "../../context/AuthContext";
import UserContext from "../../context/UserContext";
//import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { FaCheck, FaTimes } from "../../assets/icons/icons";
//import CreateProfessionalModal from "../../shared/components/modals/CreateProfessionalModal";
//import UpdateProfessionalModal from "../../shared/components/modals/UpdateProfessionalModal";
//import DeleteProfessionalModal from "../../shared/components/modals/DeleteProfessionalModal";
import "./adminPanel.css";

import { fetchUsers } from "../../services/api";

export default function PendingProfessionals() {
  const { users, setUsers } = useContext(AuthContext);
  const { professionals, setProfessionals } = useContext(UserContext);

  const defaultIUserImage = "/assets/img/user.jpg";
  //const [showCreateModal, setShowCreateModal] = useState(false);
  //const [showUpdateModal, setShowUpdateModal] = useState(false);
  //const [showDeleteModal, setShowDeleteModal] = useState(false);


  //const handleCloseUpdateModal = () => setShowUpdateModal(false);
  //const handleShowUpdateModal = () => setShowUpdateModal(true);
  //const handleCloseCreateModal = () => setShowCreateModal(false);
  //const handleShowCreateModal = () => setShowCreateModal(true);
  //const handleShowDeleteModal = () => setShowDeleteModal(true);
  //const handleCloseDeleteModal = () => setShowDeleteModal(false);

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
      };

      setProfessionals([...professionals, newProfessional]);
    };

  return (
    <div id="background-admin">
      <div id="table-title">
        <h2>Tabla pendientes aprobación</h2>
        {/* <Button
          variant="success"
          onClick={handleShowCreateModal}
          className="mb-4"
        >
          Agregar profesional
        </Button> */}
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
            {users.map((p, i) => (
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
                    {/* <MdAddCircleOutline /> */}
                    <FaCheck
                      onClick={() => {
                        addUserToProfessionals(p);
                        //handleShowUpdateModal();
                      }}
                    />
                    <FaTimes
                    //   onClick={() => {
                    //     selectProfessional(p);
                    //     handleShowDeleteModal();
                    //   }}
                    />
                  </div>
                </td>
              </tr>
            ))}
            {/* <CreateProfessionalModal
              show={showCreateModal}
              handleClose={handleCloseCreateModal}
              professionals={professionals}
              setProfessionals={setProfessionals}
            /> */}
            {/* <UpdateProfessionalModal
              show={showUpdateModal}
              handleClose={handleCloseUpdateModal}
              professionals={professionals}
              setProfessionals={setProfessionals}
              selectedProfessional={selectedProfessional}
              setSelectedProfessional={setSelectedProfessional}
            /> */}
            {/* <DeleteProfessionalModal 
              show={showDeleteModal}
              handleClose={handleCloseDeleteModal}
              professionals={professionals}
              setProfessionals={setProfessionals}
              selectedProfessional={selectedProfessional}
              /> */}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

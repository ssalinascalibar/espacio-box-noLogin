import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import CloseButton from "react-bootstrap/CloseButton";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import PropTypes from "prop-types";

export default function CreateProfessionalModal({
  show,
  handleClose,
  professionals,
  setProfessionals,
}) {
  const [newProfessional, setNewProfessional] = useState({});
  const [image, setImage] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const [showAlertWarning, setShowAlertWarning] = useState(false);

  CreateProfessionalModal.propTypes = {
    show: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
  };

  const handleChange = async (e) => {
    const newId =
      professionals && professionals.length > 0
        ? Math.max(...professionals.map((p) => p.id)) + 1
        : 1;

    setNewProfessional({
      ...newProfessional,
      id: newId,
      [e.target.name]: e.target.value.toLowerCase(),
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setNewProfessional({
        ...newProfessional,
        image: URL.createObjectURL(file),
        status: "approved",
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newProfessional.name || !newProfessional.paternal_surname || !newProfessional.title) {
      
      setShowAlertWarning(true);
      setTimeout(() => {
        setShowAlertWarning(false);
      }, 5000);
      return; 
    }

    if (!newProfessional.image) {
      newProfessional.image = "/assets/img/user.jpg";
    }

    setProfessionals([...professionals, newProfessional]);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
      setNewProfessional({});
      setImage(null);
      handleClose();
    }, 2000);
  };

  const handleCleanNewProfessional = () => {
    setNewProfessional({});
    setImage(null);
  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <CloseButton onClick={handleClose}></CloseButton>
        </Modal.Header>
        <Modal.Body>
          {showAlert && (
            <Alert variant="success" className="mb-4">
              Nuevo profesional agregado exitosamente.
            </Alert>
          )}
          {showAlertWarning && (
            <Alert variant="warning" className="mb-4">
              Por favor, completa los campos obligatorios: Nombre, Apellido
              Paterno y Título.
            </Alert>
          )}
          <Form onSubmit={handleSubmit}>
            <h4>Agregar nuevo profesional</h4>
            <Form.Group controlId="rut" className="mb-4">
              <Form.Control
                type="text"
                name="rut"
                value={newProfessional.rut || ""}
                onChange={handleChange}
                placeholder="Rut"
                autoComplete="new-rut"
              />
            </Form.Group>
            <Form.Group controlId="name" className="mb-4">
              <Form.Control
                type="name"
                name="name"
                value={newProfessional.name || ""}
                onChange={handleChange}
                placeholder="Nombre"
                autoComplete="new-name"
              />
            </Form.Group>
            <Form.Group controlId="paternal_surname" className="mb-4">
              <Form.Control
                type="paternal_surname"
                name="paternal_surname"
                value={newProfessional.paternal_surname || ""}
                onChange={handleChange}
                placeholder="Apellido paterno"
                autoComplete="new-paternal_surname"
              />
            </Form.Group>
            <Form.Group controlId="maternal_surname" className="mb-4">
              <Form.Control
                type="maternal_surname"
                name="maternal_surname"
                value={newProfessional.maternal_surname || ""}
                onChange={handleChange}
                placeholder="Apellido materno"
                autoComplete="new-maternal_surname"
              />
            </Form.Group>
            <Form.Group controlId="phone" className="mb-4">
              <Form.Control
                type="phone"
                name="phone"
                value={newProfessional.phone || ""}
                onChange={handleChange}
                placeholder="Celular"
                autoComplete="new-phone"
              />
            </Form.Group>
            <Form.Group controlId="email" className="mb-4">
              <Form.Control
                type="email"
                name="email"
                value={newProfessional.email || ""}
                onChange={handleChange}
                placeholder="@tucorreo"
                autoComplete="new-email"
              />
            </Form.Group>
            <Form.Group controlId="title" className="mb-4">
              <Form.Control
                type="title"
                name="title"
                value={newProfessional.title || ""}
                onChange={handleChange}
                placeholder="Título del profesional"
                autoComplete="new-title"
              />
            </Form.Group>
            <Form.Group controlId="text" className="mb-4">
              <Form.Control
                as="textarea"
                rows={6}
                type="text"
                name="text"
                value={newProfessional.text || ""}
                onChange={handleChange}
                placeholder="Descripción"
                autoComplete="new-text"
              />
            </Form.Group>
            <Form.Group controlId="hourly_rate" className="mb-4">
              <Form.Control
                type="number"
                name="hourly_rate"
                value={newProfessional.hourly_rate || ""}
                onChange={handleChange}
                placeholder="Valor hora"
                autoComplete="new-hourly_rate"
              />
            </Form.Group>
            <Form.Group controlId="password" className="mb-4">
              <Form.Control
                type="text"
                name="password"
                value={newProfessional.password || ""}
                onChange={handleChange}
                placeholder="Clave acceso"
                autoComplete="new-password"
              />
            </Form.Group>
            {/* {error && <p style={{ color: "#fff" }}>{error}</p>} */}
            <Form.Group controlId="image" className="mb-4">
              <Form.Label>Subir imagen</Form.Label>
              <Form.Control
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
              />
              <Form.Text className="text-muted">
                Tamaño de imagen 600x800px para una correcta visualización
              </Form.Text>
              {image && (
                <div className="mt-3">
                  <p>Previsualización:</p>
                  <img
                    src={URL.createObjectURL(image)}
                    alt="Previsualización"
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </div>
              )}
            </Form.Group>
            <Button variant="success" type="submit">
              Agregar
            </Button>
          </Form>
        </Modal.Body>
        {showAlert && (
          <Alert variant="success" className="mb-4">
            Nuevo profesional agregado exitosamente.
          </Alert>
        )}
        {showAlertWarning && (
          <Alert variant="warning" className="mb-4">
            Por favor, completa los campos obligatorios: Nombre, Apellido
            Paterno y Título.
          </Alert>
        )}
        <Modal.Footer>
          <Button variant="secondary" onClick={() => { handleClose(); handleCleanNewProfessional(); }}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

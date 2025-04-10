import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import CloseButton from "react-bootstrap/CloseButton";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import PropTypes from "prop-types";

export default function UpdateProfessionalModal({
  show,
  handleClose,
  professionals,
  setProfessionals,
  selectedProfessional,
  setSelectedProfessional,
}) {
  const [showAlert, setShowAlert] = useState(false);

  UpdateProfessionalModal.propTypes = {
    show: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
  };

  const handleChange = async (e) => {
    setSelectedProfessional({
      ...selectedProfessional,
      [e.target.name]: e.target.value.toLowerCase(),
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedProfessional({
        ...selectedProfessional,
        image: URL.createObjectURL(file), 
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedProfessionals = professionals.map((prof) =>
      prof.id === selectedProfessional.id ? selectedProfessional : prof
    );

    setProfessionals(updatedProfessionals);
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
      setSelectedProfessional("");
      handleClose();
    }, 2000);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <CloseButton onClick={handleClose}></CloseButton>
        </Modal.Header>
        <Modal.Body>
          {showAlert && (
            <Alert variant="success" className="mb-4">
              Profesional editado exitosamente.
            </Alert>
          )}
          <Form onSubmit={handleSubmit}>
            <h4>Editar profesional</h4>
            <Form.Group controlId="rut" className="mb-4">
              <Form.Control
                type="text"
                name="rut"
                value={selectedProfessional.rut || ""}
                onChange={handleChange}
                placeholder="Rut"
                autoComplete="new-rut"
              />
            </Form.Group>
            <Form.Group controlId="name" className="mb-4">
              <Form.Control
                type="name"
                name="name"
                value={selectedProfessional.name || ""}
                onChange={handleChange}
                placeholder="Nombre"
                autoComplete="new-name"
              />
            </Form.Group>
            <Form.Group controlId="paternal_surname" className="mb-4">
              <Form.Control
                type="paternal_surname"
                name="paternal_surname"
                value={selectedProfessional.paternal_surname || ""}
                onChange={handleChange}
                placeholder="Apellido paterno"
                autoComplete="new-paternal_surname"
              />
            </Form.Group>
            <Form.Group controlId="maternal_surname" className="mb-4">
              <Form.Control
                type="maternal_surname"
                name="maternal_surname"
                value={selectedProfessional.maternal_surname || ""}
                onChange={handleChange}
                placeholder="Apellido materno"
                autoComplete="new-maternal_surname"
              />
            </Form.Group>
            <Form.Group controlId="phone" className="mb-4">
              <Form.Control
                type="tel"
                name="phone"
                value={selectedProfessional.phone || ""}
                onChange={handleChange}
                placeholder="Celular"
                autoComplete="tel"
              />
            </Form.Group>
            <Form.Group controlId="email" className="mb-4">
              <Form.Control
                type="email"
                name="email"
                value={selectedProfessional.email || ""}
                onChange={handleChange}
                placeholder="@tucorreo"
                autoComplete="email"
              />
            </Form.Group>
            <Form.Group controlId="title" className="mb-4">
              <Form.Control
                type="title"
                name="title"
                value={selectedProfessional.title || ""}
                onChange={handleChange}
                placeholder="Profesional"
                autoComplete="off"
              />
            </Form.Group>
            <Form.Group controlId="text" className="mb-4">
              <Form.Control
                as="textarea"
                rows={6}
                type="text"
                name="text"
                value={selectedProfessional.text || ""}
                onChange={handleChange}
                placeholder="Descripción"
                autoComplete="off"
              />
            </Form.Group>
            <Form.Group controlId="hourly_rate" className="mb-4">
              <Form.Control
                type="number"
                name="hourly_rate"
                value={selectedProfessional.hourly_rate || ""}
                onChange={handleChange}
                placeholder="Valor hora"
                autoComplete="off"
              />
            </Form.Group>
            <Form.Group controlId="password" className="mb-4">
              <Form.Control
                type="text"
                name="password"
                value={selectedProfessional.password || ""}
                onChange={handleChange}
                placeholder="Clave acceso"
                autoComplete="new-password"
              />
            </Form.Group>
            {/* {error && <p style={{ color: "#fff" }}>{error}</p>} */}
            <Form.Group controlId="image" className="mb-4">
              <Form.Label>Imagen actual</Form.Label>
              {selectedProfessional.image && (
                <div className="mb-3">
                  <img
                    src={selectedProfessional.image}
                    alt="Previsualización"
                    style={{ maxWidth: "50%", height: "auto", borderRadius: "8px", margin: "0 auto", display: "block" }}
                  />
                </div>
              )}
              <Form.Control
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
              />
              <Form.Text className="text-muted">
                Selecciona una nueva imagen para reemplazar la actual.
              </Form.Text>
            </Form.Group>
            <Button variant="success" type="submit">
              Guardar
            </Button>
          </Form>
        </Modal.Body>
        {showAlert && (
          <Alert variant="success" className="mb-4">
            Profesional editado exitosamente.
          </Alert>
        )}
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

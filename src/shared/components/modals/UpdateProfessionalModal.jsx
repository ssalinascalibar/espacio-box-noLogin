/* eslint-disable react/prop-types */
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";

export default function UpdateProfessionalModal({ show, handleClose, professionals, setProfessionals, selectedProfessional, setSelectedProfessional }) {

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

  const handleSubmit = e => {
    e.preventDefault();

  const updatedProfessionals = professionals.map((prof) =>
    prof.id === selectedProfessional.id ? selectedProfessional : prof
  );

  setProfessionals(updatedProfessionals);
  alert("Profesional editado");
  setSelectedProfessional('');
  
  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Button variant="secondary" onClick={handleClose}>
            X
          </Button>
        </Modal.Header>
        <Modal.Body>
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
                type="phone"
                name="phone"
                value={selectedProfessional.phone || ""}
                onChange={handleChange}
                placeholder="Celular"
                autoComplete="new-phone"
              />
            </Form.Group>
            <Form.Group controlId="email" className="mb-4">
              <Form.Control
                type="email"
                name="email"
                value={selectedProfessional.email || ""}
                onChange={handleChange}
                placeholder="@tucorreo"
                autoComplete="new-email"
              />
            </Form.Group>
            <Form.Group controlId="title" className="mb-4">
              <Form.Control
                type="title"
                name="title"
                value={selectedProfessional.title || ""}
                onChange={handleChange}
                placeholder="Profesional"
                autoComplete="new-title"
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
                autoComplete="new-text"
              />
            </Form.Group>
            <Form.Group controlId="hourly_rate" className="mb-4">
              <Form.Control
                type="number"
                name="hourly_rate"
                value={selectedProfessional.hourly_rate || ""}
                onChange={handleChange}
                placeholder="Valor hora"
                autoComplete="new-hourly_rate"
              />
            </Form.Group>
            <Form.Group controlId="password" className="mb-4">
              <Form.Control
                type="password"
                name="password"
                value={selectedProfessional.password || ""}
                onChange={handleChange}
                placeholder="Clave acceso"
                autoComplete="new-password"
              />
            </Form.Group>
            {/* {error && <p style={{ color: "#fff" }}>{error}</p>} */}
            <Button variant="success" type="submit">
              Editar
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types
export default function CreateProfessionalModal({ show, handleClose, professionals, setProfessionals }) {

    const [newProfessional, setNewProfessional] = useState({});
    console.log(newProfessional)
    console.log(professionals)
  
    CreateProfessionalModal.propTypes = {
    show: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
  };

  const handleChange = async (e) => {
    setNewProfessional({
      ...newProfessional,
      [e.target.name]: e.target.value.toLowerCase(),
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
      setProfessionals([...professionals, newProfessional]);
      console.log(professionals)
      alert('Nuevo profesional agregado')
      setNewProfessional('')
      console.log(newProfessional)
  
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
            <h4>Agregar nuevo profesional</h4>
            <Form.Group controlId="rut" className="mb-4">
              {/* <Form.Label>Correo Electrónico</Form.Label> */}
              <Form.Control
                type="text"
                name="rut"
                // value={registeredUser.email || ""}
                onChange={handleChange}
                placeholder="Rut"
                autoComplete="new-rut"
              />
            </Form.Group>
            <Form.Group controlId="name" className="mb-4">
              {/* <Form.Label>Contraseña</Form.Label> */}
              <Form.Control
                type="name"
                name="name"
                // value={registeredUser.password || ""}
                onChange={handleChange}
                placeholder="Nombre"
                autoComplete="new-name"
              />
            </Form.Group>
            <Form.Group controlId="paternal_surname" className="mb-4">
              {/* <Form.Label>Contraseña</Form.Label> */}
              <Form.Control
                type="paternal_surname"
                name="paternal_surname"
                // value={registeredUser.password || ""}
                onChange={handleChange}
                placeholder="Apellido paterno"
                autoComplete="new-paternal_surname"
              />
            </Form.Group>
            <Form.Group controlId="maternal_surname" className="mb-4">
              {/* <Form.Label>Contraseña</Form.Label> */}
              <Form.Control
                type="maternal_surname"
                name="maternal_surname"
                // value={registeredUser.password || ""}
                onChange={handleChange}
                placeholder="Apellido materno"
                autoComplete="new-maternal_surname"
              />
            </Form.Group>
            <Form.Group controlId="phone" className="mb-4">
              {/* <Form.Label>Contraseña</Form.Label> */}
              <Form.Control
                type="phone"
                name="phone"
                // value={registeredUser.password || ""}
                onChange={handleChange}
                placeholder="Celular"
                autoComplete="new-phone"
              />
            </Form.Group>
            <Form.Group controlId="email" className="mb-4">
              {/* <Form.Label>Contraseña</Form.Label> */}
              <Form.Control
                type="email"
                name="email"
                // value={registeredUser.password || ""}
                onChange={handleChange}
                placeholder="Correo"
                autoComplete="new-email"
              />
            </Form.Group>
            <Form.Group controlId="title" className="mb-4">
              {/* <Form.Label>Contraseña</Form.Label> */}
              <Form.Control
                type="title"
                name="title"
                // value={registeredUser.password || ""}
                onChange={handleChange}
                placeholder="Profesional"
                autoComplete="new-title"
              />
            </Form.Group>
            <Form.Group controlId="hourly_rate" className="mb-4">
              {/* <Form.Label>Contraseña</Form.Label> */}
              <Form.Control
                type="number"
                name="hourly_rate"
                // value={registeredUser.password || ""}
                onChange={handleChange}
                placeholder="Valor hora"
                autoComplete="new-hourly_rate"
              />
            </Form.Group>
            <Form.Group controlId="password" className="mb-4">
              {/* <Form.Label>Contraseña</Form.Label> */}
              <Form.Control
                type="password"
                name="password"
                // value={registeredUser.password || ""}
                onChange={handleChange}
                placeholder="Clave acceso"
                autoComplete="new-password"
              />
            </Form.Group>
            {/* {error && <p style={{ color: "#fff" }}>{error}</p>} */}
            <Button variant="success" type="submit">
              Agregar
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          {/* <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
}

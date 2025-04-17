import { useState, useContext } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import TermsModal from "../../shared/components/modals/TermsModal";
import AuthContext from "../../context/AuthContext";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function UserRegister({ setIsRegistering }) {
  const { users, setUsers } = useContext(AuthContext);
  const [certificate, setCertificate] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [showTerms, setShowTerms] = useState(false); // Estado para mostrar el modal
 
  const [formData, setFormData] = useState({
    name: "",
    paternal_surname: "",
    maternal_surname: "",
    email: "",
    password: "",
    phone: "",
    profession: "",
    rut: "",
    certificate: null,
  });

  console.log("formData", formData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      
      const allowedTypes = ["application/pdf", "image/jpeg"];
      if (!allowedTypes.includes(file.type)) {
        setErrorMessage("Solo se permiten archivos PDF o JPG.");
        return;
      }

      setCertificate(file);
      setFormData({
        ...formData,
        certificate: file,
      });
      setErrorMessage("");
    }
  };

  const handleShowTerms = (e) => {
    e.preventDefault();
    setShowTerms(true); // Mostrar el modal
  };

  const handleAcceptTerms = () => {
    if (
      !formData.name ||
      !formData.paternal_surname ||
      !formData.maternal_surname ||
      !formData.email ||
      !formData.password ||
      !formData.phone ||
      !formData.profession ||
      !formData.rut ||
      !formData.certificate
    ) {
      setErrorMessage("Por favor, completa todos los campos.");
      setShowTerms(false); // Cerrar el modal si hay errores
      return;
    }

    setUsers([...users, formData]);

    setSuccessMessage("Registro exitoso. Ahora puedes iniciar sesión.");
    setErrorMessage("");

    // Limpiar el formulario
    setFormData({
      name: "",
      paternal_surname: "",
      maternal_surname: "",
      email: "",
      password: "",
      phone: "",
      profession: "",
      rut: "",
      certificate: null,
    });
    setCertificate(null);

    setShowTerms(false); // Cerrar el modal

    setTimeout(() => {
      setIsRegistering(false);
    }, 2000);
  };

  const handleCloseTerms = () => setShowTerms(false); // Cerrar el modal

  return (
    <Form onSubmit={handleShowTerms}>
      <h2>EspacioBox</h2>
      <h4>Registro de Usuario</h4>

      {successMessage && <Alert variant="success">{successMessage}</Alert>}
      {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}

      <Row className="mb-4">
        <Col lg={6}>
          <Form.Group controlId="name" className="mb-4">
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Nombre"
              required
              autoComplete="off"
            />
          </Form.Group>
        </Col>
        <Col lg={6}>
          <Form.Group controlId="paternal_surname" className="mb-4">
            <Form.Control
              type="text"
              name="paternal_surname"
              value={formData.paternal_surname}
              onChange={handleChange}
              placeholder="Apellido Paterno"
              required
              autoComplete="off"
            />
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col lg={6}>
          <Form.Group controlId="maternal_surname" className="mb-4">
            <Form.Control
              type="text"
              name="maternal_surname"
              value={formData.maternal_surname}
              onChange={handleChange}
              placeholder="Apellido Materno"
              required
              autoComplete="off"
            />
          </Form.Group>
        </Col>
        <Col lg={6}>
          <Form.Group controlId="rut" className="mb-4">
            <Form.Control
              type="text"
              name="rut"
              value={formData.rut}
              onChange={handleChange}
              placeholder="RUT"
              required
              autoComplete="off"
            />
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col lg={6}>
          <Form.Group controlId="email" className="mb-4">
            <Form.Control
              type="email"
              name="email"
              value={formData.email || ""}
              onChange={handleChange}
              placeholder="@email"
              required
              autoComplete="off"
            />
          </Form.Group>
        </Col>
        <Col lg={6}>
          <Form.Group controlId="password" className="mb-4">
            <Form.Control
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Contraseña"
              required
              autoComplete="new-password"
            />
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col lg={6}>
          <Form.Group controlId="phone" className="mb-4">
            <Form.Control
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Teléfono"
              required
              autoComplete="off"
            />
          </Form.Group>
        </Col>
        <Col lg={6}>
          <Form.Group controlId="profession" className="mb-4">
            <Form.Control
              type="text"
              name="profession"
              value={formData.profession}
              onChange={handleChange}
              placeholder="Profesión"
              required
              autoComplete="off"
            />
          </Form.Group>
        </Col>
      </Row>

      <Form.Group controlId="certificate" className="mb-2">
        <Form.Label>Subir certificado de título (PDF o JPG)</Form.Label>
        <Form.Control
          type="file"
          accept="application/pdf, image/jpeg"
          onChange={handleFileUpload}
          required
        />
        <Form.Text style={{ color: "#fcfcfc" }}>
          Solo se permiten archivos en formato PDF o JPG.
        </Form.Text>
        {certificate && (
          <div className="mt-3">
            <p>Archivo seleccionado: {certificate.name}</p>
          </div>
        )}
      </Form.Group>

      <Button variant="success" type="submit" size="lg">
        Registrarse
      </Button>

      <p className="mt-3">
        ¿Ya tienes una cuenta?{" "}
        <Button
          variant="link"
          style={{ color: "#fff" }}
          onClick={() => setIsRegistering(false)}
        >
          Inicia sesión aquí
        </Button>
      </p>

      <TermsModal
        show={showTerms}
        handleClose={handleCloseTerms}
        handleAccept={handleAcceptTerms}
      />
    </Form>
  );
}

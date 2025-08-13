import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import "./contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const mailtoLink = `mailto:contacto.espaciobox@gmail.com?subject=Contacto desde EspacioBox.com&body=Nombre: ${formData.name}%0AEmail: ${formData.email}%0AFono: ${formData.phone}%0AMensaje: ${formData.message}`;
    // Abre el cliente de correo predeterminado
    window.location.href = mailtoLink;
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <main>
      <Container>
        <div className="backgroundSection">
          <Row>
            <Col>
              <h2 className="section-titles">Nuestra Ubicación</h2>
              <iframe
                src="https://www.google.com/maps/d/u/0/embed?mid=1d_LkKTNp7NCaJKRj425vP-4tu77umQQ&ehbc=2E312F"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps"
              ></iframe>
            </Col>
          </Row>
          <div id="contact">
            <Row>
              <Col lg={6}>
                <h3>Contáctanos</h3>
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="formName" className="mb-3">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Ingresa tu nombre"
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formEmail" className="mb-3">
                    <Form.Label>Correo Electrónico</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Ingresa tu correo electrónico"
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formPhone" className="mb-3">
                    <Form.Label>Fono</Form.Label>
                    <Form.Control
                      type="number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Ingresa tu número de teléfono"
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formMessage" className="mb-3">
                    <Form.Label>Mensaje</Form.Label>
                    <Form.Control
                      as="textarea"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Ingresa tu mensaje"
                      required
                    />
                  </Form.Group>
                  <Button variant="success" type="submit">
                    Enviar
                  </Button>
                </Form>
              </Col>
              <Col lg={6} className="col-style-contact">
              <div id="contact-text">
                <h3 className="section-titles">En EspacioBox queremos ayudarte</h3>
                <p>
                  Buscamos ser más que un espacio donde atender a sus pacientes
                  con comodidad sino también construir una comunidad de
                  profesionales que puedan apoyarse entre sí.
                </p>
                <div className="fluid-image-contact">
                  <Image src="/assets/img/contacto.png" fluid />
                </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </main>
  );
}

import { useState, useContext } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import AuthContext from "../../context/AuthContext";


export default function UserRegister({ setIsRegistering }) {

  const { users, setUsers } = useContext(AuthContext);
  console.log("users", users);
  const [formData, setFormData] = useState({
    name: "",
    paternal_surname: "",
    maternal_surname: "",
    email: "",
    password: "",
    phone: "",
    profession: "",
    rut: "",
  });

  console.log("formData", formData);

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    // Validación simple
    if (!formData.name || !formData.paternal_surname || !formData.maternal_surname || !formData.email || !formData.password || !formData.phone || !formData.profession || !formData.rut) {
      setErrorMessage("Por favor, completa todos los campos.");
      return;
    }

    // Simular agregar el usuario a la lista de usuarios
    // setUsers((prevUsers) => [...prevUsers, formData]);
    setUsers([...users, formData])

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
    });

    // Volver al formulario de inicio de sesión después de unos segundos
    setTimeout(() => {
      setIsRegistering(false);
    }, 3000);
  };

  return (
    <Form onSubmit={handleRegister}>
        <h2>EspacioBox</h2>
      <h4>Registro de Usuario</h4>
      {successMessage && <Alert variant="success">{successMessage}</Alert>}
      {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
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
      <Button variant="success" type="submit" size="lg">
        Registrarse
      </Button>
      <p>
        ¿Ya tienes una cuenta?{" "}
        <Button variant="link" onClick={() => setIsRegistering(false)}>
          Inicia sesión aquí
        </Button>
      </p>
    </Form>
  );
}
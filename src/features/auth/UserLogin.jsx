import { useState, useEffect, useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { fetchUsers } from "../../services/api";
import { FaUserCircle } from "../../assets/icons/icons";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import UserRegister from "./UserRegister";
import "./login.css";

export default function UserLogin() {
  const { setIsAuthUser, registeredUser, setRegisteredUser, users, setUsers } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isRegistering, setIsRegistering] = useState(false); // Estado para alternar entre login y registro

  const navigate = useNavigate();

  // useEffect(() => {
  //   const getUsers = async () => {
  //     const data = await fetchUsers();
  //     setUsers(data);
  //   };
  //   getUsers();
  // }, []);

  useEffect(() => {
    if (users.length === 0) {
      const getUsers = async () => {
        const data = await fetchUsers();
        setUsers(data);
      };
      getUsers();
    }
  }, [users, setUsers]);

  const handleChange = async (e) => {
    setRegisteredUser({
      ...registeredUser,
      [e.target.name]: e.target.value.toLowerCase(),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const enabledUser = users.find(
      (user) =>
        user.email === registeredUser.email &&
        user.password === registeredUser.password
    );

    const validateCorreo = !users.email === !registeredUser.email;

    if (enabledUser) {
      setIsAuthUser(true);
      setSuccessMessage("Bienvenido/a " + registeredUser.email);
      setTimeout(() => {
        navigate(`/agendar`);
      }, 2000);
    } else if (validateCorreo) {
      setError("Debes ingresar un correo válido");
    } else {
      setError("* Correo o contraseña incorrectos");
    }
  };

  return (
    <div className="login-background">
      <Container>
        <Row>
          <Col md={2} lg={3}></Col>
          <Col xs={12} md={8} lg={6}>
            <div className="login-form">
              <FaUserCircle />
              {isRegistering ? (
                <UserRegister
                  setIsRegistering={setIsRegistering}
                />
              ) : (
                <Form onSubmit={handleSubmit}>
                  <h2>EspacioBox</h2>
                  <h4>Ingresar como Usuario</h4>
                  {successMessage && (
                    <Alert variant="success" className="mb-4">
                      {successMessage}
                    </Alert>
                  )}
                  {error && (
                    <Alert variant="danger" className="mb-4">
                      {error}
                    </Alert>
                  )}
                  <Form.Group controlId="email" className="mb-4">
                    
                    <Form.Control
                      type="email"
                      name="email"
                      value={registeredUser.email || ""}
                      onChange={handleChange}
                      placeholder="@email"
                      autoComplete="new-email"
                    />
                  </Form.Group>
                  <Form.Group controlId="passsword" className="mb-4">
                    
                    <Form.Control
                      type="password"
                      name="password"
                      value={registeredUser.password || ""}
                      onChange={handleChange}
                      placeholder="Contraseña"
                      autoComplete="new-password"
                    />
                  </Form.Group>
                  {error && <p style={{ color: "#fff" }}>{error}</p>}
                  <Button variant="primary" type="submit" size="lg">
                    Iniciar Sesión
                  </Button>
                  <p>
                    ¿No tienes una cuenta?{" "}
                    <Button
                      variant="link"
                      onClick={() => setIsRegistering(true)}
                      style={{ color: '#fff' }}
                    >
                      Regístrate aquí
                    </Button>
                  </p>
                </Form>
              )}
            </div>
          </Col>
          <Col md={2} lg={3}></Col>
        </Row>
      </Container>
    </div>
  );
}

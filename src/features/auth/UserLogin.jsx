import { useState, useEffect, useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { fetchUsers } from "../../services/api";
import { FaUserCircle } from "../../assets/icons/icons"
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./login.css";

export default function UserLogin() {

  const { setIsAuthUser, registeredUser, setRegisteredUser } = useContext(AuthContext);
  // const [registeredUser, setRegisteredUser] = useState({});
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const getUsers = async () => {
      const data = await fetchUsers();
      setUsers(data);
    };
    getUsers();
  }, []);

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
      alert("Bienvenido/a " + registeredUser.email);
      navigate(`/agendar`);
    } else if (validateCorreo) {
      alert("debes ingresar un correo");
    } else {
      alert("No tienes acceso");
      setError("*Correo o contraseña incorrectos");
    }
  };

  return (
    <div className="login-background">
      <Container className="login-container">
        <Row>
          <Col>
            <div className="login-form">
            <FaUserCircle />
              <Form onSubmit={handleSubmit}>
                <h2>EspacioBox</h2>
                <h4>Ingresar como Usuario</h4>
                <Form.Group controlId="email" className="mb-4">
                  {/* <Form.Label>Correo Electrónico</Form.Label> */}
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
                  {/* <Form.Label>Contraseña</Form.Label> */}
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
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

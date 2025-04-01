import { useState, useEffect, useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { fetchAdmin } from "../../services/api";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./login.css";

export default function Login() {
  const { setIsAuth } = useContext(AuthContext);
  const [registeredUser, setRegisteredUser] = useState({});
  const [adminUsers, setAdminUsers] = useState([]);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const getAdminUsers = async () => {
      const data = await fetchAdmin();
      setAdminUsers(data);
    };
    getAdminUsers();
  }, []);

  const handleChange = async (e) => {
    setRegisteredUser({
      ...registeredUser,
      [e.target.name]: e.target.value.toLowerCase(),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const enabledUser = adminUsers.find(
      (user) => user.email === registeredUser.email && user.password === registeredUser.password
    );

    const validateCorreo = !adminUsers.email === !registeredUser.email;

    if (enabledUser) {
      setIsAuth(true);
      // setUserLogged(enabledUser)
      alert(
        "Bienvenido/a " +
          registeredUser.email?.charAt(0).toUpperCase() +
          registeredUser.email?.slice(1) +
          " a tu perfil"
      );
      navigate(`/admin`);
      setRegisteredUser("");
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
          <Form onSubmit={handleSubmit}>
            <h2>EspacioBox</h2>
            <h4>Iniciar Sesión</h4>
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

import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../../context/AuthContext";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Header from "../header/Header";
import Image from "react-bootstrap/Image";
import "./navigationBar.css";

export default function NavigationBar() {
  const { isAuth, logOut } = useContext(AuthContext);
  console.log(isAuth);

  return (
    <>
      <Header />
      <Navbar expand="lg" sticky="top">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <Image
              src="/assets/img/logo-transparente.png"
              alt="EspacioBox Logo"
              width="200"
              height="200"
              className="d-inline-block align-top"
              fluid
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto menu-nav">
              <Link to="/">Home</Link>
              <Link to="/nosotros">Nosotros</Link>
              <Link to="/agendar">Agendar</Link>
              <Link to="/boxes">Box</Link>
              <Link to="/contacto">Contacto</Link>
            </Nav>
            {/* <Nav className="ms-auto">
              {isAuth ? (
                <Nav.Link onClick={logOut}>Logout Admin</Nav.Link>
              ) : (
                <Link to="/login">Acceso Admin</Link>
              )}
            </Nav> */}
            <NavDropdown
              title="Admin"
              id="basic-nav-dropdown"
              align="end"
              menualign="end"
            >
              <NavDropdown.Item as="div">
                {isAuth ? (
                  <Nav.Link onClick={logOut}>Logout Admin</Nav.Link>
                ) : (
                  <Link to="/login">Acceso Admin</Link>
                )}
              </NavDropdown.Item>
              {isAuth && (
                <NavDropdown.Item as={Link} to="/admin">
                  Panel Admin
                </NavDropdown.Item>
              )}
            </NavDropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

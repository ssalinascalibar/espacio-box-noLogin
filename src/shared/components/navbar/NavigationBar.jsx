import { useContext } from "react";
import { Link } from "react-router-dom";
import { FaUserCog, FaUserCircle } from "../../../assets/icons/icons"
import AuthContext from "../../../context/AuthContext";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Header from "../header/Header";
import Image from "react-bootstrap/Image";
import { ReserveBtn } from "../buttons/Buttons";
import "./navigationBar.css";

export default function NavigationBar() {
  const { isAuth, logOut, registeredUser, isAuthUser, logOutUser } = useContext(AuthContext);

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
              <Link to="/boxes">Box</Link>
              <Link to="/condiciones-de-arriendo">Condiciones de arriendo</Link>
              <Link to="/contacto">Contacto</Link>
            </Nav>
            <ReserveBtn />
            {isAuthUser && registeredUser ? (
              <NavDropdown
                title={
                  <>
                  <FaUserCircle />
                  {registeredUser.email || "Usuario"}
                  </>
                }
                id="basic-nav-dropdown"
                align={{ lg: "end" }}
                className="me-lg-3 mb-lg-0 mb-3"
              >
                <NavDropdown.Item as="div">
                  {isAuthUser ? (
                    <Nav.Link onClick={logOutUser}>Logout Usuario</Nav.Link>
                  ) : (
                    <Link to="/userlogin">Acceso Usuario</Link>
                  )}
                </NavDropdown.Item>
                {isAuthUser && (
                  <NavDropdown.Item as={Link} to="/agendar">
                    Mis reservas
                  </NavDropdown.Item>
                )}
              </NavDropdown>
            ) : null}
            {!isAuthUser && (
            <NavDropdown
              title={
                <>
                <FaUserCog />
                {"Admin"}
                </>
              }
              id="basic-nav-dropdown"
              align={{ lg: "end" }}
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
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

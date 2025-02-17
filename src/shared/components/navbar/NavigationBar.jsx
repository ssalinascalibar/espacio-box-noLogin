import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Header from "../header/Header";
import Image from "react-bootstrap/Image";
import "../../../assets/styles/navigationBar.css";

const NavigationBar = () => {
  return (
    <>
      <Header />
      <Navbar expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="#home">
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
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Nosotros</Nav.Link>
              <Nav.Link href="#link">Agendar</Nav.Link>
              <Nav.Link href="#link">Box</Nav.Link>
              <Nav.Link href="#link">Profesionales</Nav.Link>
              <Nav.Link href="#link">Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;

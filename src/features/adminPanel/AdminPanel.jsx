import { useState, useContext } from "react";
import UserContext from "../../context/UserContext";
import AdminProfessionals from "./AdminProfessionals";
import { Container } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import AdminReservations from "./AdminReservations";

export default function AdminPanel() {

  const { professionals, setProfessionals } = useContext(UserContext);
  const [key, setKey] = useState("professionals-table");

  return (
    <Container>
      <div className="backgroundSection">
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3"
        >
          <Tab eventKey="professionals-table" title="Admin profesionales">
            <AdminProfessionals professionals={professionals} setProfessionals={setProfessionals} />
          </Tab>
          <Tab eventKey="reservations" title="Admin reservas">
            <AdminReservations professionals={professionals} setProfessionals={setProfessionals} />
          </Tab>
        </Tabs>
      </div>
    </Container>
  );
}

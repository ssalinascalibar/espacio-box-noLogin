import { useState } from "react";
import AdminProfessionals from "./AdminProfessionals";
import { Container } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

export default function AdminPanel() {
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
            <AdminProfessionals />
          </Tab>
          <Tab eventKey="reservations" title="Admin reservas">
            Tab content for Profile
          </Tab>
        </Tabs>
      </div>
    </Container>
  );
}

import { useState, useContext } from "react";
import UserContext from "../../context/UserContext";
import AdminProfessionals from "./AdminProfessionals";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import AdminReservations from "./AdminReservations";
import PendingProfessionals from "./PendingProfessionals";

export default function AdminPanel() {
  const { professionals, setProfessionals } = useContext(UserContext);

  const approvedProfessionals = professionals.filter(
    (professional) => professional.status === "Aprobado"
  );

  const [key, setKey] = useState("professionals-table");

  return (
    <div className="backgroundSectionAdmin tabs-wrapper">
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="professionals-table" title="Admin profesionales">
          <AdminProfessionals
            professionals={approvedProfessionals}
            setProfessionals={setProfessionals}
          />
        </Tab>
        <Tab eventKey="reservations" title="Admin reservas">
          <AdminReservations
            professionals={approvedProfessionals}
            setProfessionals={setProfessionals}
          />
        </Tab>
        <Tab eventKey="pending-professionals" title="Pendientes aprobación">
          <PendingProfessionals />
        </Tab>
      </Tabs>
    </div>
  );
}

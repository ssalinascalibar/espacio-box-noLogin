import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { FaArrowLeft, FaArrowRight } from "../../assets/icons/icons"
import "./reserve.css";

export default function Reserve() {
  const days = [
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
    "Domingo",
  ];
  const hours = Array.from({ length: 14 }, (_, i) => `${i + 8}:00`);

  return (
    <Container>
      <div className="backgroundSection">
        <div id="calendar">
          <h2>Agenda</h2>
            <h4>Selecciona una hora en el calendario</h4>
          <div id="navigation-calendar">
            <button className="navigation-button"><FaArrowLeft /></button>
            <button className="navigation-button"><h5>Hoy</h5></button>
            <button className="navigation-button"><FaArrowRight /></button>
          </div>
          <Table striped responsive>
            <thead>
              <tr>
                <th>Horas</th>
                {days.map((day) => (
                  <th key={day} className="text-center">
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {hours.map((hour) => (
                <tr key={hour}>
                  <td className="bold-td">{hour}</td>
                  {days.map((i) => (
                    <td key={i} className="text-center hover-td">
                      {hour}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </Table>
          <div id="calendar-footer">
            <Button variant="success" className="mt-2">
              Reservar
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
}

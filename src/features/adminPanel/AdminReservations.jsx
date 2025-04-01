import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";

export default function AdminReservations({ professionals, setProfessionals }) {
    
  const addPayment = (id) => {
    const index = professionals.findIndex(
      (professional) => professional.id === id
    );
    professionals[index].ispayed = !professionals[index].ispayed;
    setProfessionals([...professionals]);
  };

  return (
    <div id="background-admin">
      <div id="table-title">
        <h2>Reservas</h2>
      </div>
      <div id="professionals-table">
        <Table striped>
          <thead>
            <tr>
              <th>Id</th>
              <th>Sala</th>
              <th>Usuario</th>
              <th>Fecha</th>
              <th>Hora Inicio</th>
              <th>Valor</th>
              <th>Pagados</th>
            </tr>
          </thead>
          <tbody>
            {professionals.map((p, i) => (
              <tr key={i}>
                <td>{p.id}</td>
                <td>Sala 1</td>
                <td>
                  {p.name} {p.paternal_surname} {p.maternal_surname}
                </td>
                <td>Fecha</td>
                <td>17:00hrs</td>
                <td>{p.hourly_rate}</td>
                <td>
                  <Form.Check
                    type="checkbox"
                    checked={p.ispayed}
                    onChange={() => addPayment(p.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

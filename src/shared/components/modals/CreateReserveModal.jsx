import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function CreateReserveModal({
  show,
  handleClose,
  professionals,
  onCreateReservation,
}) {
  const [newReservation, setNewReservation] = useState({
    room: "",
    professional: null,
    date: "",
    start_time: "",
    hourly_rate: "",
    ispayed: true,
  });

  const handleCreateReservation = () => {
    // Validar que todos los campos estén completos
    if (
      !newReservation.room ||
      !newReservation.professional ||
      !newReservation.date ||
      !newReservation.start_time
    ) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    // Llamar a la función de creación de reserva pasada como prop
    onCreateReservation(newReservation);

    // Limpiar el formulario y cerrar el modal
    setNewReservation({
      room: "",
      professional: null,
      date: "",
      start_time: "",
      hourly_rate: "",
      ispayed: false,
    });
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Crear nueva reserva</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Box</Form.Label>
            <Form.Select
              value={newReservation.room}
              onChange={(e) =>
                setNewReservation({ ...newReservation, room: e.target.value })
              }
            >
              <option value="">Seleccionar box</option>
              <option value="Box 1">Box 1</option>
              <option value="Box 2">Box 2</option>
              <option value="Box 3">Box 3</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Profesional</Form.Label>
            <Form.Select
              value={newReservation.professional?.id !== undefined ? newReservation.professional.id : ""}
              onChange={(e) => {
                const selectedId = e.target.value;
                const selectedProfessional = professionals.find(
                  (p) => String(p.id) === selectedId
                );
                setNewReservation({
                  ...newReservation,
                  professional: selectedProfessional,
                  hourly_rate: selectedProfessional.hourly_rate
                });
              }}
            >
              <option value="">Seleccionar profesional</option>
              {professionals.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name} {p.paternal_surname}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Fecha</Form.Label>
            <Form.Control
              type="date"
              value={newReservation.date || ""}
              onChange={(e) =>
                setNewReservation({ ...newReservation, date: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Hora inicio</Form.Label>
            <Form.Control
              type="time"
              value={newReservation.start_time || ""}
              onChange={(e) =>
                setNewReservation({
                  ...newReservation,
                  start_time: e.target.value,
                })
              }
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Pagado</Form.Label>
            <Form.Check
              type="checkbox"
              checked={newReservation.ispayed}
              onChange={(e) =>
                setNewReservation({
                  ...newReservation,
                  ispayed: e.target.checked,
                })
              }
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancelar
        </Button>
        <Button variant="success" onClick={handleCreateReservation}>
          Crear
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

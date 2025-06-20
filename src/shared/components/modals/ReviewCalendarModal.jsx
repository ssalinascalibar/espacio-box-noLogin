import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Reserve from "../../../features/reserve/Reserve";

export default function ReviewCalendarModal({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Calendario de Reservas</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Reserve isGuest={true} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
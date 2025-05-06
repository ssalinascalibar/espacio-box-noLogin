import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default function ConfirmApprovalModal({ show, handleClose, handleConfirm, user }) {
    
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Confirmar Aprobación</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          ¿Está seguro de que desea aprobar al usuario{" "}
          <strong>{user?.name} {user?.paternal_surname}</strong>?
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancelar
        </Button>
        <Button variant="success" onClick={handleConfirm}>
          Aprobar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
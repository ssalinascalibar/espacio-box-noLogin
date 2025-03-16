import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default function CreateProfessionalModal({show, handleClose}) {

  return (
      <>
      <Modal show={show} onHide={handleClose} className="professionals-modal">
        <Modal.Header>
          <Button variant="secondary" onClick={handleClose}>X</Button>
        </Modal.Header>
        <Modal.Body>
    
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          {/* <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
    </>
  )
}

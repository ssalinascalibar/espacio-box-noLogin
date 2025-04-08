import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default function DeleteProfessionalModal({
  show,
  handleClose,
  professionals,
  setProfessionals,
  selectedProfessional
}) {
  const deleteProfessional = async (id) => {
    try {
      setProfessionals(
        professionals.filter((p) => {
          return p.id !== id;
        })
    );
    handleClose()
    } catch (error) {
      console.error("Error al eliminar el profesional:", error.message);
    }
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Confirmar eliminación</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        ¿Desea eliminar a {" "}
        <strong>{selectedProfessional?.name} {selectedProfessional?.paternal_surname}</strong>? Esta acción no se puede
        deshacer.
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancelar
        </Button>
        <Button
          variant="danger"
          onClick={() => deleteProfessional(selectedProfessional.id)}
        >
          Eliminar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Image from 'react-bootstrap/Image';
import PropTypes from "prop-types";
import "./professionalCardModal.css";

export default function ProfessionalCardModal({ show, handleClose, card }) {

  ProfessionalCardModal.propTypes = {
    show: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    card: PropTypes.shape({
      name: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    }).isRequired,
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} className="professionals-modal">
        <Modal.Header>
          <Button variant="secondary" onClick={handleClose}>X</Button>
        </Modal.Header>
        <Modal.Body>
        <Image src={card.image} />
          <h2>{card.name}</h2>
          <h3>{card.title}</h3>
          <p>{card.text}</p>
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
  );
}

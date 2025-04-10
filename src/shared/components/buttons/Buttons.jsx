import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom';

export function ReserveBtn() {
  return (
    <Button variant="primary" size="lg" className="mb-5 mb-lg-0">
      <Link to="/agendar" style={{ textDecoration: "none", color: "inherit" }}>Agendar Box</Link>
    </Button>
  );
}

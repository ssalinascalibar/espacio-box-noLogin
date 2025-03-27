import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom';

export function ReserveBtn() {
  return (
    <Button variant="primary" size="lg">
      <Link to="/agendar" style={{ textDecoration: "none", color: "inherit" }}>Agendar Box</Link>
    </Button>
  );
}

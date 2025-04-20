import { Link } from "react-router-dom";
import { FaHandPointRight, FaInfoCircle } from "../../../assets/icons/icons";
import "./custom-links.css";

export function ReserveLink({ color = "#fcfcfc", hoverColor = "#4598ac" }) {
  return (
      <Link
        to="/agendar"
        className="customLink"
        onMouseEnter={(e) => (e.target.style.color = hoverColor)}
        onMouseLeave={(e) => (e.target.style.color = color)}
        style={{ hoverColor: hoverColor, color: color }}
      >
        <FaHandPointRight />
        AGENDA AQUÍ
      </Link>
  );
}

export function ContactLink({ color = "#fcfcfc", hoverColor = "#4598ac" }) {
  return (
      <Link
        to="/contacto"
        className="customLink"
        onMouseEnter={(e) => (e.target.style.color = hoverColor)}
        onMouseLeave={(e) => (e.target.style.color = color)}
        style={{ hoverColor: hoverColor, color: color }}
      >
        <FaInfoCircle />
        Contáctanos
      </Link>
  );
}

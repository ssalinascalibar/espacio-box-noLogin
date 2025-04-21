import { Link } from "react-router-dom";
import { FaHandPointRight, FaInfoCircle, FaEye } from "../../../assets/icons/icons";
import "./custom-links.css";

export function ReserveLink({ color = "#fcfcfc", hoverColor = "#4598ac", text = "AGENDA AQUÍ" }) {
  return (
      <Link
        to="/agendar"
        className="customLink"
        onMouseEnter={(e) => (e.target.style.color = hoverColor)}
        onMouseLeave={(e) => (e.target.style.color = color)}
        style={{ hoverColor: hoverColor, color: color }}
      >
        <FaHandPointRight />
        {text}
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
export function BoxLink({ color = "#fcfcfc", hoverColor = "#4598ac" }) {
  return (
      <Link
        to="/boxes"
        className="customLink"
        onMouseEnter={(e) => (e.target.style.color = hoverColor)}
        onMouseLeave={(e) => (e.target.style.color = color)}
        style={{ hoverColor: hoverColor, color: color }}
      >
        <FaEye />
        Ver instalaciones
      </Link>
  );
}

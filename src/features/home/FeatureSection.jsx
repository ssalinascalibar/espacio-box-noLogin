import Image from "react-bootstrap/Image";
import "./featureSection.css";

export default function FeatureSection() {
  return (
    <div className="features backgroundSection">
      <div className="features-content">
        <h2 className="section-titles">
          Ven a conocer EspacioBox Servicio de arriendo de box por horas y
          jornadas para profesionales.
        </h2>
        <p>
          Sabemos que el trabajo independiente puede ser solitario y contar con
          redes de apoyo es fundamental para brindar un buen servicio centrado
          en la ética para todos nuestros consultantes, dónde también
          consideremos a la persona del terapeuta o especialista como parte
          central de nuestro trabajo.
        </p>
        <p>
          Invitamos a todos quienes trabajan con nosotros a formar parte de esta
          comunidad como una red de apoyo, autocuidado y derivación.
        </p>
      </div>
      <div className="fluid-image">
        <Image src="/assets/img/featuresSection.jpg" fluid />
      </div>
    </div>
  );
}

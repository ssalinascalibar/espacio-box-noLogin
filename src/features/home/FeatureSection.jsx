import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./featureSection.css";

export default function FeatureSection() {
  return (
    <div className="backgroundSection">
      <Row>

      <Col xs={12} md={6} lg={6}>
      <section className="features-content">
        <h2 className="section-titles">
          ¿Cómo funcionamos?
        </h2>
        <article>
          <h4>Reservar un box</h4>
          <p>
            En nuestro calendario online, puedes ver la disponibilidad de salas en tiempo real y reservar todas las horas que necesites.
          </p>
          <h4>Pagos</h4>
          <p>
            Una vez selecionada las horas podras realizar el pago mediante transferencia y confirmar tu reserva
          </p>
          <h4>Cancelar horas y reembolso</h4>
          <p>
            Podras anular tus reservas con un minimo de 24hrs de anticipacion para poder reagendar sin volver apagar.
          </p>
          <h4>Acceso a la oficina </h4>
          <p>
          La oficina cuenta con una cerradura inteligente (con contraseña) en su puerta de acceso principal. Cuando realizas un pedido recibirás un correo de confirmación en el cual se encuentra la clave para que puedas acceder a la oficina. 
          </p>
        </article>
      </section>
      </Col>
      <Col xs={12} md={6} lg={6}>
      <div className="image-features">
        <Image src="/assets/img/featuresSection.jpg" fluid />
      </div>
      </Col>
      </Row>
    </div>
  );
}

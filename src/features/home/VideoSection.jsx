import ReactPlayer from "react-player";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import {
  // MdCheckCircle,
  FaWifi,
  FaCoffee,
  FaFan,
  MdOutlineLocationOn,
  FaKitchenSet,
  FaSun,
  FaPanorama 
} from "../../assets/icons/icons";
import "./videoSection.css";

export default function VideoSection() {
  const iconData = [
    {
      id: 0,
      icon: <FaSun  size={40} />,
      title: "Luz natural",
      description: "Para que tus pacientes puedan esperar cómodamente",
    },
    {
      id: 1,
      icon: <FaPanorama size={40} />,
      title: "Vista panorámica",
      description: "Hermosas vistas para disfrutar mientras trabajas",
    },
    {
      id: 2,
      icon: <FaWifi size={40} />,
      title: "Conectividad asegurada WIFI",
      description:
        "Internet inalámbrico disponible en toda la oficina",
    },
    {
      id: 3,
      icon: <FaCoffee size={40} />,
      title: "Café e infusiones siempre disponibles",
      description:
        "Libre disposición para ti y tus pacientes",
    },
    {
      id: 4,
      icon: <FaFan size={40} />,
      title: "Ambientes climatizados todo el año",
      description:
        "Ventiladores, aire acondicionado y calefactores para todas las temporadas",
    },
    {
      id: 5,
      icon: <FaKitchenSet size={40} />,
      title: "Kitchenette para tus pausas",
      description: "Un espacio para preparar tu comida y descansar entre tus sesiones",
    },
    {
      id: 6,
      icon: <MdOutlineLocationOn size={40} />,
      title: "Ubicación estratégica en Providencia",
      description: "Literalmente a pasos de Metro Los Leones",
    },
  ];

  return (
    <>
      <div className="videoSection backgroundSection">
        <Row>
          <Col xs={12} md={12} xl={6} className="col-style-videoSection">
            <h2 className="section-titles">
              Te invitamos a descubrir nuestros espacios, diseñados para brindar
              confort y funcionalidad.
            </h2>
            <p>
              Contamos con 3 box amoblados, equipados con todo lo necesario para
              que puedas atender a tus pacientes con la máxima comodidad.
            </p>
            <p>
              Cada espacio ha sido pensado para ofrecer un ambiente acogedor y
              profesional, permitiéndote concentrarte en lo más importante: tu
              trabajo y el bienestar de quienes te visitan.
            </p>
            {/* <ul>
              <li>
                <MdCheckCircle />
                Luz natural
              </li>
              <li>
                <MdCheckCircle />
                Hermosa vista
              </li>
              <li>
                <MdCheckCircle />
                Ambiente Silencioso
              </li>
              <li>
                <MdCheckCircle />
                Baño privado
              </li>
            </ul> */}
          </Col>
          <Col xs={12} md={12} xl={6}>
            <div className="player-wrapper">
              <ReactPlayer
                className="react-player"
                url={"/assets/videos/video-home-espaciobox.mp4"}
                loop={true}
                playing={false}
                muted={false}
                controls={true}
                volume={1}
                light={"/assets/img/video-thumbnail.jpg"}
                width="100%"
                height="100%"
              />
            </div>
          </Col>
        </Row>
        <section id="room-features">
          <Row>
            <Col>
              <div id="room-features-header">
                <h2>
                  Salas completamente equipadas con todo lo necesario para que
                  tu sesión de terapia sea una gran experiencia.
                </h2>
                <p>Y con una excelente ubicación</p>
              </div>
            </Col>
          </Row>
          <Row className="g-4">
            {iconData.map((card) => (
              <Col key={card.id} xs={12} md={6} lg={4}>
                <Card className="text-left h-100">
                  <Card.Body className="d-flex flex-column justify-content-center">
                    <div className="mb-3">{card.icon}</div>
                    <Card.Title>{card.title}</Card.Title>
                    <Card.Subtitle className="card-subtitle">
                      {card.description}
                    </Card.Subtitle>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </section>
      </div>
    </>
  );
}

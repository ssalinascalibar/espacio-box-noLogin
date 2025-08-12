import { useEffect, useState } from "react";
import { fetchBoxes } from "../../services/api";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import "./boxes.css";
import ReactPlayer from "react-player";
// import ImageGallery from "react-image-gallery";
// import { GalleryShowBtn } from "./BoxesBtn";
import HorizontalGallery from "../../shared/components/gallery/HorizontalGallery";
import {
  FaImages,
  FaSun,
  FaPanorama,
  FaWifi,
  FaCoffee,
  FaFan,
  FaKitchenSet,
  MdOutlineLocationOn,
  RiSofaFill,
  FaVideo,
} from "../../assets/icons/icons";
import {
  ReserveLink,
  ContactLink,
} from "../../shared/components/links/CustomLinks";
import "react-image-gallery/styles/css/image-gallery.css";

export default function Boxes() {
  const [boxes, setBoxes] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState("Providencia");
  const [filteredBoxes, setFilteredBoxes] = useState([]);

  useEffect(() => {
    const getBoxes = async () => {
      const data = await fetchBoxes();
      setBoxes(data);
    };
    getBoxes();
  }, []);

  useEffect(() => {
    const filtered = boxes.filter((box) => box.location === selectedRoom);
    setFilteredBoxes(filtered);
  }, [selectedRoom, boxes]);

  const iconData = [
    {
      id: 0,
      icon: <FaSun size={40} />,
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
      description: "Internet inalámbrico disponible en toda la oficina",
    },
    {
      id: 3,
      icon: <FaCoffee size={40} />,
      title: "Café e infusiones siempre disponibles",
      description: "Libre disposición para ti y tus pacientes",
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
      description:
        "Un espacio para preparar tu comida y descansar entre tus sesiones",
    },
    {
      id: 6,
      icon: <MdOutlineLocationOn size={40} />,
      title: "Ubicación estratégica en Providencia",
      description: "Literalmente a pasos de Metro Los Leones",
    },
    {
      id: 7,
      icon: <RiSofaFill size={40} />,
      title: "Sala de espera",
      description: "Para que tus pacientes puedan esperar cómodamente",
    },
  ];

  const videoBoxes = [
    {
      id: 0,
      title: "Espacio Box",
      url: "/assets/videos/video-espaciobox.mp4",
      thumb: "/assets/img/espacioBox-galeria-7.jpg",
    },
    {
      id: 1,
      title: "Box 1",
      url: "/assets/videos/video-box-1.mp4",
      thumb: "/assets/img/espacioBox-galeria-9.jpg",
    },
    {
      id: 2,
      title: "Box 2",
      url: "/assets/videos/video-box-2.mp4",
      thumb: "/assets/img/espacioBox-galeria-2.jpg",
    },
    {
      id: 3,
      title: "Box 3",
      url: "/assets/videos/video-box-3.mp4",
      thumb: "/assets/img/espacioBox-galeria-8.jpg",
    },
  ];

  return (
    <>
      <main>
        <Container>
          <section id="box-features">
            <div id="boxes-gallery" className="backgroundSection">
              <Row>
                <Col xs={12} lg={12} className="background-gray">
                  <h2 className="section-titles mt-4">
                    Todo lo que necesitas para brindar una atención de calidad
                  </h2>
                  <p>
                    Espacios diseñados para que tú y tus consultantes vivan una
                    experiencia cómoda, segura y acogedora.
                  </p>
                  <p>Y sí... ¡con excelente ubicación!</p>
                  <p>
                    Conoce nuestros box disponibles y encuentra tu espacio ideal
                    para trabajar con tranquilidad.
                  </p>
                  <div className="box-features-link">
                    <ContactLink color="#4598ac" hoverColor="#37352d" />
                    <ReserveLink color="#4598ac" hoverColor="#37352d" />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div id="box-features-header">
                    <h2>
                      Salas completamente equipadas con todo lo necesario para
                      que tu sesión de terapia sea una gran experiencia.
                    </h2>
                    <p>Y con una excelente ubicación</p>
                  </div>
                </Col>
              </Row>
              <Row className="g-4">
                {iconData.map((card) => (
                  <Col key={card.id} xs={12} lg={3}>
                    <Card className="text-left h-100">
                      <Card.Body className="d-flex flex-column justify-content-center">
                        <div className="mb-3">{card.icon}</div>
                        <Card.Title>{card.title}</Card.Title>
                        {/* <Card.Text>{card.description}</Card.Text> */}
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          </section>

          <section>
            <div className="backgroundSection">
              <Row>
                <Col>
                  <div id="show-title-gallery">
                    <FaImages />
                    <h4>Descubre Nuestros Espacios</h4>
                  </div>
                  <Form.Select
                    id="filter-room"
                    name="filterRoom"
                    aria-label="Filtrar por sede"
                    value={selectedRoom}
                    onChange={(e) => setSelectedRoom(e.target.value)}
                  >
                    <option>Filtrar por sede</option>
                    <option value="Providencia">Sede Providencia</option>
                    <option value="Las Condes">Sede Las Condes</option>
                  </Form.Select>
                </Col>
              </Row>

              <Row className="mt-4">
                <h4>Instalaciones</h4>
                <Col className="horizontal-gallery-wrapper">
                  <HorizontalGallery
                    items={filteredBoxes}
                    height="95%"
                    scrollbarColor="#4598ac"
                  />
                </Col>
              </Row>
            </div>
          </section>

          <section>
            <div id="boxes-video" className="backgroundSection">
              <Row>
                <h2 className="section-titles">Nuestras instalaciones</h2>
                <p>
                  Invitamos a todos quienes trabajan con nosotros a formar parte
                  de esta comunidad como una red de apoyo, autocuidado y
                  derivación.
                </p>
                <div id="show-title-gallery">
                  <FaVideo />
                  <h4>Conoce más a través de nuestros videos</h4>
                </div>
              </Row>
              <Row>
                {videoBoxes?.map((videoBox, i) => (
                  <Col xs={12} md={6} lg={3} key={i}>
                    <div className="player-wrapper">
                      <ReactPlayer
                        className="react-player"
                        url={videoBox.url}
                        loop={true}
                        playing={false}
                        muted={false}
                        controls={true}
                        volume={1}
                        light={videoBox.thumb}
                        width="100%"
                        height="100%"
                        type="video/mp4"
                      />
                    </div>
                    <h5>{videoBox.title}</h5>
                  </Col>
                ))}
              </Row>
            </div>
          </section>
        </Container>
      </main>
    </>
  );
}

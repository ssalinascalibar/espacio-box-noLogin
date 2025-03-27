import { useEffect, useState } from "react";
import { fetchBoxes } from "../../services/api";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Button from 'react-bootstrap/Button';
import "./boxes.css";
import ReactPlayer from "react-player";
import ImageGallery from "react-image-gallery";
import { GalleryShowBtn } from "./BoxesBtn";
import "react-image-gallery/styles/css/image-gallery.css";

export default function Boxes() {
  const [boxes, setBoxes] = useState([]);
  const [filterBoxes, setFilterBoxes] = useState([]);
  console.log(filterBoxes)

  useEffect(() => {
    const getBoxes = async () => {
      const data = await fetchBoxes();
      setBoxes(data);
    };
    getBoxes();
  }, []);

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
          <div id="boxes-gallery" className="backgroundSection">
            <Row>
              <Col xs={12} lg={6}>
                <h2 style={{ textAlign: "left" }}>
                  Bienvenidos a nuestra comunidad de profesionales
                </h2>
                <p style={{ textAlign: "justify" }}>
                  En EspacioBox buscamos ser más que un espacio donde atender a
                  sus pacientes con comodidad sino también construir una
                  comunidad de profesionales que puedan apoyarse entre sí.
                </p>
                <p style={{ textAlign: "justify" }}>
                  Sabemos que el trabajo independiente puede ser solitario y
                  contar con redes de apoyo es fundamental para brindar un buen
                  servicio centrado en la ética para todos nuestros
                  consultantes, dónde también consideremos a la persona del
                  terapeuta o especialista como parte central de nuestro
                  trabajo.
                </p>
                <div id="gallery-show-btn">
                  <GalleryShowBtn boxes={boxes} filterBoxes={filterBoxes} setFilterBoxes={setFilterBoxes} />
                </div>
              </Col>
              <Col xs={12} lg={6} className="d-lg-flex justify-content-lg-center">
              <div className="gallery">
                <ImageGallery items={filterBoxes.length > 0 ? filterBoxes : boxes} showBullets showIndex />
                </div>
              </Col>
            </Row>
          </div>
          <div id="boxes-video" className="backgroundSection">
            <h2>Nuestras instalaciones</h2>
            <p>
              Invitamos a todos quienes trabajan con nosotros a formar parte de
              esta comunidad como una red de apoyo, autocuidado y derivación.
            </p>
            <Row>
              {videoBoxes?.map((videoBox, i) => (
                <Col xs={12} md={6} lg={6} key={i}>
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
        </Container>
      </main>
    </>
  );
}

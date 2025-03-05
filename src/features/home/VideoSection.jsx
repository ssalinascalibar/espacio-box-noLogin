import ReactPlayer from "react-player";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { MdCheckCircle } from "../../assets/icons/icons";
import "./videoSection.css";

export default function VideoSection() {
  return (
    <>
    <div className="videoSection backgroundSection">
      <Row>
        <Col xs={12} md={12} xl={5}>
          <h2>
          Te invitamos a descubrir nuestros espacios, diseñados para brindar confort y funcionalidad.
          </h2>
          <p>Contamos con 3 box amoblados, equipados con todo lo necesario para que puedas atender a tus pacientes con la máxima comodidad. Cada espacio ha sido pensado para ofrecer un ambiente acogedor y profesional, permitiéndote concentrarte en lo más importante: tu trabajo y el bienestar de quienes te visitan.</p>
          <ul>
            <li><MdCheckCircle/>Luz natural</li>
            <li><MdCheckCircle />Hermosa vista</li>
            <li><MdCheckCircle />Ambiente Silencioso</li>
            <li><MdCheckCircle />Baño privado</li>
          </ul>
        </Col>
        <Col xs={12} md={12} xl={7}>
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
      </div>
    </>
  );
}

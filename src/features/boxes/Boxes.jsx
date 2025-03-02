import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./boxes.css";
import ImageGallery from "react-image-gallery";
// import stylesheet if you're not already using CSS @import


export default function Boxes() {

  const images = [
    {
      original: "/assets/img/featuresSection.jpg",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];
  return (
    <>
      <main>
        <Container>
          <div id="boxes-content">
            <Row>
              <Col xs={12} lg={6}>
                <h2>Bienvenidos a nuestra comunidad de profesionales</h2>
              </Col>
              <Col xs={12} lg={6}>
                <p>
                  En EspacioBox buscamos ser más que un espacio donde atender a
                  sus pacientes con comodidad sino también construir una
                  comunidad de profesionales que puedan apoyarse entre sí.
                </p>
                <p>
                  Sabemos que el trabajo independiente puede ser solitario y
                  contar con redes de apoyo es fundamental para brindar un buen
                  servicio centrado en la ética para todos nuestros
                  consultantes, dónde también consideremos a la persona del
                  terapeuta o especialista como parte central de nuestro
                  trabajo.
                </p>
                <p>
                  Invitamos a todos quienes trabajan con nosotros a formar parte
                  de esta comunidad como una red de apoyo, autocuidado y
                  derivación.
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
              <div className="image-gallery-wrapper">
            <ImageGallery items={images} />
            </div>
            </Col>
            </Row>
          </div>
        </Container>
      </main>
    </>
  );
}

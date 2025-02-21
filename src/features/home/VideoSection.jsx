import ReactPlayer from "react-player";

import "./videoSection.css";

export default function VideoSection() {
  return (
    <>
    {/* <h3>Conoce nuestros espacios, contamos con 3 box disponibles, amoblados para que puedan atender con comodidad a sus consultantes.</h3> */}
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
    </>
  );
}

export default function VideoSection() {
  return (
    <>
      <video className="responsive-video" controls>
        <source src="/videos/video-home-espaciobox.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </>
  );
};

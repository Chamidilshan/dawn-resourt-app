import "./videoStyle.css";
import video from "../assets/videoplayback.mov";

function Videos() {
  return (
    <section className="video-area">
      <div className="videoholder">
        <h1>A glimpse of who we are</h1>
        <video className="video" src={video} autoPlay muted></video>
        <a href="/Gallery" className="view-more-btn">
          View Gallery
        </a>
      </div>
    </section>
  );
}
export default Videos;

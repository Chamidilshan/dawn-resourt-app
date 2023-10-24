import "./HighlightsStyle.css";
import statue from "../assets/tea.jpeg";
import statue2 from "../assets/shade.jpeg";

const Highlights = () => {
  return (
    <div className="high-highlights">
      <h1>Highlights</h1>
      <div className="high-first-des-reverse">
        <div className="high-des-text">
          <p className="high-para">
            At Dawn Resorts, relaxation takes center stage. Take a dip in our
            crystal-clear natural water streams, surrounded by lush gardens, or
            challenge your friends to a game of tennis on our pristine courts.
            For those seeking adventure, explore nearby hiking trails, embark on
            wildlife safaris, or simply bask in the serene beauty of our
            surroundings.
            <br />
            <br />
            Whether you're planning a romantic wedding, a corporate retreat, or
            a family reunion, our dedicated event planners are at your service
            to ensure your special occasion is flawless. Our versatile event
            spaces can be tailored to your needs, providing the perfect backdrop
            for your cherished memories.
          </p>
        </div>

        <div className="image-highlights">
          <img src={statue} alt="img" />
          <img src={statue2} alt="img" />
        </div>
      </div>
    </div>
  );
};
export default Highlights;

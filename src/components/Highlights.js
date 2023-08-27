import "./HighlightsStyle.css";
import statue from "../assets/tea.jpeg";
import statue2 from "../assets/shade.jpeg";

const Highlights=()=>{
    return(
        <div className="highlights">
      <h1>Highlights</h1>
      <div className="first-des-reverse">
        <div className="des-text">
          <p>
            Advisory Window is a family-owned company and are local experts with
            a friendly team to support your all insurance and mortgage needs. As
            your financial adviser/s, we not only give you the best financial
            advice by providing you with a wide variety of insurance and finance
            options but we look after you once you’ve signed up for any
            insurance policies, home loans, and other financial services with
            us. When insurance claim time comes Advisory Window takes the stress
            out of the situation and manages your claim. Advisory Window is an
            intermediary between insurance customers and clients. We make sure
            you get the best service and advice from a personal claims
            assistant.
          </p>
        </div>

        <div className="image-highlights">
          <img src={statue} alt="img" />
          <img src={statue2} alt="img" />
        </div>
      </div>
      
      
    </div>
    )
}
export default Highlights;
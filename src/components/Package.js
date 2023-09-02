import "./PackagesStyle.css";
import statue from "../assets/18.jpg";

function Package(){
    return(
      <div className="about">
      <h1 id="about">What we offer</h1>
      <p className="offer-para">Let you and your kids disconnect from the virtual world and enjoy the soothing environment of a traditional village. you can simply indulge in sounds of nature or actively connect to the environment and culture.</p>
      <div className="first-des">
        <div className="des-text">
          <div className="includes">
          <p className="package">
           Our package includes the following</p>
           <ul className="included-items">
            <li>Trek across the village among paddy fields.</li>
            <li>River Bath</li>
            <li>Bird Watching</li>
            <li>Harvest produce from village koratuwas</li>
           </ul>
          </div>

           <div className="on-request">
           <p className="package">
           On request, we can arrange</p>
           <ul className="included-items">
            <li>Tour to Sembuwatta lake</li>
            <li>Basic Yoga Session</li>
            <li>Music Therapy Session</li>
            
           </ul>
           </div>
           <div className="price">
              <h2 className="price-head">
                Starting from 35,000/-
              </h2>
              <h5>per day / per family</h5>
           </div>
          
        </div>

        <div className="image">
          <img src={statue} alt="img" />
          
        </div>
      </div>

      
      
    </div>
    )
}

export default Package;
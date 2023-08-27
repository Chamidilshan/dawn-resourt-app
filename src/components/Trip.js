// import "./TripStyle.css";
import TripData from "./TripData";
import Place1 from "../assets/sembuwatte.jpg";
import Place2 from "../assets/horton.jpg";
import Place3 from "../assets/riverston.jpg";

function Trip(){
    return(
        <div className="trip">
            <h1>Top Places</h1>
            <p>You can deiscover unique 
                destinations near with us.
            </p>

            <div className="tripcard"> 
            <TripData
      image={Place1}
      heading="Sembuwatta Lake"
      text="Explore the mesmerizing beauty of Sembuwatta Lake, nestled amidst the lush hills of Sri Lanka. This pristine lake is a natural wonder, surrounded by dense forests and vibrant flora. Embark on a serene boat ride across the crystal-clear waters or take a leisurely stroll along the lakeside trails. Sembuwatta Lake offers a tranquil escape, allowing you to connect with nature and rejuvenate your senses."
    />

    <TripData
      image={Place2}
      heading="Horton Plains"
      text="Venture into the enchanting landscape of Horton Plains, a UNESCO World Heritage Site. This highland plateau is a haven for nature enthusiasts and hikers. The famous 'World's End' offers panoramic views of mist-covered valleys and lush greenery. As you trek through the diverse ecosystems, keep an eye out for unique wildlife and endemic plants. Horton Plains promises an unforgettable journey through pristine nature."
    />

    <TripData
      image={Place3}
      heading="Riverston"
      text="Immerse yourself in the breathtaking beauty of Riverston, a hidden gem in the Knuckles Mountain Range. The journey to Riverston is an adventure itself, with scenic drives and panoramic vistas. Reach the peak to witness the iconic 'Mini World's End,' offering stunning views of misty mountains and lush valleys below. Riverston is a haven for photographers, trekkers, and nature lovers seeking solitude and awe-inspiring landscapes."
    />
        </div> 

        </div>

        
    )
}

export default Trip; 
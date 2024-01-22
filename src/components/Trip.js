// import "./TripStyle.css";
import TripData from "./TripData";
import Place1 from "../assets/sembuwatte.jpg";
import Place2 from "../assets/nalanda.jpg";
import Place3 from "../assets/riverston.jpg";

function Trip(){
    return(
        <div className="trip">
            <h1 id="activity">Discover Activities</h1>
            <p className="sub-head" style={{ fontSize: '1.2rem' }}>You can discover unique 
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
      heading="Nalanda"
      text="Nalanda is an ancient archaeological site located in the North Central Province of Sri Lanka. It is renowned for the ruins of Nalanda Gedige, a unique blend of Hindu and Buddhist architecture, reflecting the historical coexistence of both religions in the region. Nalanda Gedige is situated near the town of Matale, approximately 25 kilometers from Kandy."
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
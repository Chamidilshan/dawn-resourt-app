import "./PackagesStyle.css";
import statue from "../assets/23.jpg";


import statue2 from "../assets/shade.jpeg";

const Package = () => {
  return (
    <div className="about">
      <h1 id="about">What we offer</h1>
      <p className="offer-para">Dawn Resorts is perfect for family/group getaways, nature walks, village trekking and
        experience, hosting wellness retreats and workshops. We offer a specious veranda and lush
        green outdoor lawn as indoor and outdoor session/meeting/yoga space, consciously
        prepared vegetarian cuisine, caring and kind-hearted staff and soothing green atmosphere as
        the setting for your retreat. We can provide accommodations to groups of up to 8 people,
        ideally for families or small groups of friends, in our beautifully appointed villa.</p>
      <div className="first-des">
        <div className="des-text">
          <div className="includes">
            <p className="package">
              Our packages include the following</p>
            <ol className="included-items">
              <li class="package-heading" >Nature Treks and Walks:</li>
              <ul className="included-items">
                <li>
                  Explore the lush habitat of flora and fauna and pristine nature surrounding the
                  Resort and the village.
                </li>
                <li>
                  Guided treks for families, allowing you to safely discover the beauty of the
                  mixture of nature and culture of Sri Lankan countryside.
                </li>
              </ul>
              <br />
              <li class="package-heading">Village Experiences:</li>
              <ul className="included-items">
                <li>
                  Immerse yourself in the local culture with guided village walks.
                </li>
                <li>
                  Participate in village vegetable and crop field work, experiencing the rhythms
                  of rural life.
                </li>
              </ul>
              <br />
              <li class="package-heading">Kid-Friendly Adventures:</li>
              <ul className="included-items">
                <li>
                  Exciting activities designed for children, including safe trekking and nature
                  exploration.
                </li>
                <li>
                  Engage in bird watching and discover a diverse range of creatures within 1
                  kilometer radius.
                </li>
              </ul>
              <br />
              <li class="package-heading">Educational Activites:</li>
              <ul className="included-items">
                <li>
                  Enriching experiences for kids, combining adventure with learning about the
                  natural world.
                </li>
                <li>
                  Educational programs and workshops focused on nature/culture/sustainability.
                </li>
              </ul>
              <br />
              <li class="package-heading">Relaxation and Rejuvenation:</li>
              <ul className="included-items">
                <li>
                  Adults can unwind with healthy food and tranquil stay in a peaceful
                  surrounding.
                </li>
                <li>
                  Enjoy the serenity of our resort while the kids are occupied with
                  adventures/educational activities within the range of your voice and sight.
                </li>
              </ul>
              <br />
              <li class="package-heading">Local Cuisine and Dining:</li>
              <ul className="included-items">
                <li>
                  Savor delectable local cuisine prepared with healthy ingredients sourced from
                  the village itself.
                </li>
                <li>
                  Engage in the process of making your own food – harvest your meal’s
                  ingredients from the crop field and cook your meal with the guidance and love
                  of our caring staff.
                </li>
              </ul>
              <br />
              <li class="package-heading">Wildlife Encounters:</li>
              <ul className="included-items">
                <li>
                  Discover the local flora and fauna with guided tours.
                </li>
                <li>
                  Spot exotic birds, insects, and animals during your stay.
                </li>
              </ul>
              <br />
              <li class="package-heading">Event and Wedding Venue:</li>
              <ul className="included-items">
                <li>
                  We could hold your dream function close to nature. Our resort can handle up
                  to 50 pax small functions with outdoor set-up. Please contact us for your
                  specific requirement. Let’s make it possible!
                </li>
                <li>
                  Small team/corporate gatherings up to 12 pax. (for overnight stays, we could
                  accommodate max 12 pax only)
                </li>
              </ul>
            </ol>
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
         

        </div>

        <div className="image">
          <img src={statue} alt="img" />
          

        </div>
      </div>
      <div className="price">
            <h2 className="price-head">
              Starting from 35,000/-
            </h2>
            <h5>per day / per family</h5>
          </div>



    </div>)

};
export default Package;
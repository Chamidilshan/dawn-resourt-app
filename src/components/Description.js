import "./Description.css";
import statue from "../assets/tea.jpeg";
import statue2 from "../assets/shade.jpeg";
import { forwardRef } from "react";

const Description = () => {
  return (
    <div className="desc-about">
      <h1 id="about">About Us</h1>
      <div className="desc-first-des">
        <div className="desc-des-text">
          <p>
            At Dawn Resorts, we believe that the essence of a perfect getaway lies in the harmonious blend of
            nature and comfort. Situated along the banks of a natural waterway, Dawn Resort offers a truly unique
            and tranquil setting. Imagine stepping out of your room each morning to the picturesque sight of this
            pristine waterway gently flowing, creating a soothing ambiance that stays with you throughout the day.
            Our commitment to providing an immersive experience in nature is unwavering. We take pride in
            offering safe trekking adventures, guided village walks, and opportunities to engage in village vegetable
            and crop field work, allowing you to become a part of the local culture.<br/><br/> For families with young
            adventurers, we provide an array of kid-friendly activities, from nature exploration to educational fun-
            like birdwatching. Dawn Resorts is more than just a place to stay; it's a destination where you can
            reconnect with the natural world while enjoying the comforts of luxurious accommodations and
            delicious local cuisine. Whether you seek relaxation, adventure, or a memorable event venue, we invite
            you to discover the serenity and natural beauty that define us. At Dawn Resorts, every moment will be
            an eternal memory of life, nature, and you.
            <br />
            <br />
            Our resort boasts a range of meticulously designed accommodations,
            each thoughtfully crafted to provide you with comfort and serenity.
            Whether you choose a cozy cabin, a luxurious villa, or a spacious
            suite, you'll find tasteful decor, modern amenities, and panoramic
            views of the surrounding natural beauty. Sink into plush beds, revel
            in the serenity of your private terrace, and let the soothing sounds
            of nature lull you into a peaceful slumber.
          </p>
        </div>

        <div className="desc-image">
          <img src={statue} alt="img" />
          <img src={statue2} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Description;

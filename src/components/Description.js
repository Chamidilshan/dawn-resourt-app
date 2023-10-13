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
            Nestled in the heart of nature's embrace, Dawn Resorts is a
            haven of peace and luxury that beckons you to unwind, rejuvenate,
            and escape the hustle and bustle of everyday life. With breathtaking
            views of pristine landscapes, exquisite accommodations, delectable
            cuisine, and a plethora of relaxation options, dawn resorts is your
            perfect getaway destination.
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

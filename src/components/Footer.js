import React from "react";
import "./FooterStyles.css"; 

const Footer = () => {
  return (
    <div className="footer">

      
      <div className="column">
      <div className="top">
        <div className="icons">
          <h1>Dawn Resort</h1>
          <p>Your dream escape awaits.</p>
          <a href="https://web.facebook.com/profile.php?id=100088991864049">
            <i className="fa-brands fa-facebook-square"></i>
          </a>
          <a href="https://www.instagram.com/">
            <i className="fa-brands fa-instagram-square"></i>
          </a>
          <a href="https://www.twitter.com/">
            <i className="fa-brands fa-twitter-square"></i>
          </a>
        </div>
      </div>
        <div className="map-section">
          <iframe
            className="map"
            title="Google Map"
            width="400%"
            height="300"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=Dawn%20resorts,%20Elkaduwa,%20Elkaduwa,%20Sri%20Lanka%20+(Dawn%20Resorts)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
      </div>
      <div className="column">
        <div className="row">
          <div className="section">
            <h4>About Us</h4>
            <a href="/AboutUs">Our Story</a>
            <br/>
            <a href="/AboutUs">Testimonials</a>
            <br/>
            <a href="/AboutUs">Awards</a> 
          </div>
          <div className="section">
            <h4>Explore</h4>
            <a href="/Gallery">Accommodations</a>
            <br/>
            <a href="#dining">Dining</a>
            <br/>
            <a href="/Gallery">Activities</a>
            <br/>
            <a href="/Packages">Packages</a>
          </div>
        </div>
        <div className="row">
          <div className="section">
            <h4>Our Address</h4>
            <p>
              No/28, Elkaduwa Village, Elkaduwa,
              <br />
              Sri Lanka
            </p>
            <p> +94 1122 467 78 </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
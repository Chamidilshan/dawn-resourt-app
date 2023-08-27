import "./FooterStyles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>Dawn Resort</h1>
          <p>Your dream escape awaits.</p>
        </div>
        <div className="social-icons">
          <a href="https://www.facebook.com/">
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
 
      <div className="bottom">
        <div className="section">
          <h4>Explore</h4>
          <a href="/">Accommodations</a>
          <a href="/">Dining</a>
          <a href="/">Spa & Wellness</a>
          <a href="/">Activities</a>
        </div>

        <div className="section">
          <h4>Contact Us</h4>
          <p>No/28,</p>
          <p>Elkaduwa Village</p>
          <p>Elkaduwa</p>
          <p>Sri Lanka</p>
          <p>+94 1122 467 78 </p>
        </div>

        <div className="section">
          <h4>About Us</h4>
          <a href="/">Our Story</a>
          <a href="/">Testimonials</a>
          <a href="/">Awards</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

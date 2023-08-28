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
 
      <div className="bottom">
        <div className="section">
          <h4>Explore</h4>
          <a href="http://localhost:3000/Gallery#accomo">Accommodations</a>
          <a href="http://localhost:3000/Gallery#dining">Dining</a>
          <a href="/">Spa & Wellness</a>
          <a href="/">Activities</a>
        </div>

        

        <div className="section">
          <h4>About Us</h4>
          <a href="/">Our Story</a>
          <a href="/">Testimonials</a>
          <a href="/">Awards</a>
        </div>

        
      </div>

      <div className="contact-section">
  <div className="address">
    <h3>Our Address</h3>
    <div className="address-line">
      <div className="address-icon">
        <i className="fas fa-map-marker-alt"></i>
      </div>
      <div className="address-details">
      <p className="address-text">
          No/28, Elkaduwa Village, Elkaduwa,
          Sri Lanka
        </p>
      </div>
    </div>
    <div className="phone-line">
      <div className="phone-icon">
        <i className="fas fa-phone"></i>
      </div>
      <div className="phone-details">
        <h4> +94 1122 467 78 </h4>
      </div>
    </div>
  </div>
  <div className="gmap-frame">
    <iframe
      title="Google Map"
      width="450"
      height="350"
      frameborder="0"
      scrolling="no"
      marginheight="0"
      marginwidth="0"
      src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Dawn%20resorts,%20Elkaduwa,%20Elkaduwa,%20Sri%20Lanka%20+(Dawn%20Resorts)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      ></iframe>
  </div>
</div> 


     
          </div>
  
  );
};

export default Footer;

import Galleryy from "../components/Gallery";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer  from "../components/Footer";
import myImage from "../assets/location.jpeg";

import myImageAbout from "../assets/4.jpg";
import AboutUs from "../components/AboutUs";

function Gallery() {
  return (
    <>
      <Navbar />

      <Hero
        cName="hero-mid"
        heroImg={myImageAbout}
        title="Gallery"
        btnText="Get Started"
        url="/"
        btnClass="hide"
      />
      <Galleryy />
      <Navbar />
      <Footer/>
    </>
  );
}

export default Gallery;

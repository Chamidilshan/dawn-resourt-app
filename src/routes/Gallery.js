import Galleryy from "../components/Gallery";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

import myImage from "../assets/location.jpeg";

import myImageAbout from "../assets/tea.jpeg";
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
    </>
  );
}

export default Gallery;

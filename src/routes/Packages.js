import Navbar from "../components/Navbar";

import Highlights from "../components/Highlights";
import Hero from "../components/Hero";
import myImage from "../assets/location.jpeg";
import Footer from "../components/Footer";
import Package from "../components/Package";

function Packages() {
  return (
    <>
      <Hero
        cName="hero-mid"
        heroImg={myImage}
        title="Packages"
       
       
      />

    <Package/>
      <Navbar />
      <Footer />
    </>
  );
}

export default Packages;
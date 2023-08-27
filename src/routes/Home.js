import Navbar from "../components/Navbar";

import Highlights from "../components/Highlights";
import Description from "../components/Description";

import Hero from "../components/Hero";
import myImage from "../assets/location.jpeg";
import Footer from "../components/Footer";
import Video from "../components/video";
import Trip from "../components/Trip";

function Home() {
  return (
    <>
      <Hero
        cName="hero"
        heroImg={myImage}
        title="Dawn Resorts"
        text="Experience the serenity"
        btnText="Begin Journey"
        url="http://localhost:3000/#about"
        btnClass="show"
      />

      <Description />
      <Video/>
      <Highlights />
      <Trip />
      <Navbar />
      <Footer />
    </>
  );
}

export default Home;

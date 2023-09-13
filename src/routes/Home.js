import Navbar from "../components/Navbar";

import Highlights from "../components/Highlights";
import Description from "../components/Description";

import Hero from "../components/Hero";
import myImage from "../assets/home.jpeg";
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
        url="/#about"
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

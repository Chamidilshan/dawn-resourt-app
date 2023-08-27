import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import myImage from '../assets/location.jpeg';

function About() {
    return (
     <>
      <Navbar/>
        <Hero
        cName="this is about"
        />
     </>
    );
  }
  
  export default About;
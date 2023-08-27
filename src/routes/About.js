import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

import myImage from '../assets/location.jpeg';

import myImageAbout from '../assets/home.jpeg';
import AboutUs from '../components/AboutUs';



function About() {
    return ( 
     <>

      <Navbar/>
        

              <Hero  
        cName="hero-mid"
        heroImg= {myImageAbout }
        title="About Us"
        btnText="Get Started"
        url="/"
        btnClass="hide"
        />
        <AboutUs/>
        <Navbar/> 

     </>
    );
  }
  
  export default About;
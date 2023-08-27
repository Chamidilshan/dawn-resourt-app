import Navbar from '../components/Navbar';
import Highlights from '../components/Highlights';
import Description from '../components/Description';
import Hero from '../components/Hero';
import myImage from '../assets/location.jpeg';



function Home() { 
   
    return (
     <>
        <Navbar/>
        <Hero
        cName="hero"
        heroImg= {myImage}
        title="Dawn Resorts"
        text="Experience the serenity"
        btnText="Begin Journey"
        url="/"
        btnClass="show"
        />
        <Description/>
        <Highlights/>
     </>
    );
  } 
  
  export default Home;
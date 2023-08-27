import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import myImage from '../assets/location.jpeg';
import Footer from '../components/Footer';
import Trip from '../components/Trip';


function Home() { 
    return (
     <> 
        
        <Hero
        cName="hero"
        heroImg= {myImage}
        title="Travel with us"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        btnText="Get Started"
        url="/"
        btnClass="show"
        />
        
        <Trip/> 
        <Footer/>
        <Navbar/>
     </>
    );
  } 
  
  export default Home;
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import myImage from '../assets/location.jpeg';
import Footer from '../components/Footer';


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
        <Navbar/> 
        <Footer/>
     </>
    );
  } 
  
  export default Home;
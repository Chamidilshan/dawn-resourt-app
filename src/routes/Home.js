// import Navbar from './components/Navbar';
import Hero from '../components/Hero';
import myImage from '../assets/location.jpeg';


function Home() { 
    return (
     <>
        {/* <Navbar> */}
        <Hero
        cName="hero"
        heroImg= {myImage}
        title="Travel with us"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        btnText="Get Started"
        url="/"
        btnClass="show"
        />
     </>
    );
  } 
  
  export default Home;
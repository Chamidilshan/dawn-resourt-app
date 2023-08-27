import Navbar from '../components/Navbar';

import Highlights from '../components/Highlights';
import Description from '../components/Description';

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
        title="Dawn Resorts"
        text="Experience the serenity"
        btnText="Begin Journey"
        url="/"
        btnClass="show"
        />

        
       
   

        <Description/>
        <Highlights/>
         <Trip/> 
        <Navbar/> 
        <Footer/>

     </>
    );
  } 
  
  export default Home;
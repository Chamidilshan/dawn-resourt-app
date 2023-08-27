import Navbar from "../components/Navbar";
import Hero  from "../components/Hero";
import Footer  from "../components/Footer";
import ContactForm from "../components/ContactForm";
import img from "../assets/5.jpg";

function Contact() {
  return (
   
     <>
        
        <Hero
        cName="hero-mid"
        heroImg= {img}
        title="Contact Us"
        />
        <Navbar/>
        <ContactForm/>
        <Footer/>
        </>
   
  );
}

export default Contact;
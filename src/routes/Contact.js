import Navbar from "../components/Navbar";
import Hero  from "../components/Hero";
import Footer  from "../components/Footer";
import ContactForm from "../components/ContactForm";
import img from "../assets/tea.jpeg";

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
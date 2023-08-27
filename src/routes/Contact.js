import Navbar from "../components/Navbar";
import Hero  from "../components/Hero";
import ContactForm from "../components/ContactForm";
import img from "../assets/tea.jpeg";

function Contact() {
  return (
   
     <>
        
        <Hero
        cName="hero"
        heroImg= {img}
        title="Contact Us"
        
        
        
        />
        <Navbar/>
        <ContactForm/>
        </>
   
  );
}

export default Contact;
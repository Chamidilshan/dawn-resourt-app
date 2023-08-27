import Navbar from "../components/Navbar";
import Hero  from "../components/Hero";
import ContactForm from "../components/ContactForm";
import img from "../assets/tea.jpeg";

function Contact() {
  return (
   
     <>
        <Navbar/>
        <Hero
        cName="hero"
        heroImg= {img}
        title="Contact Us"
        
        
        
        />
        <ContactForm/>
        </>
   
  );
}

export default Contact;
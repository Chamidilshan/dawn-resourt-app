import "./ContactFormStyle.css";
import {db} from "../config/firestore";
import { collection, addDoc } from "firebase/firestore";
import React, { useState } from 'react';
import Swal from 'sweetalert2';

const   ContactForm = () =>{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !email || !subject || !message) {
            Swal.fire({
                // icon: 'error',
                // title: 'Oops...', 
                text: 'Please fill in all fields before submitting!',
            });
            return;
        }

        try {
            const docRef = await addDoc(collection(db, "contacts"), {
                name: name,
                email: email,
                subject: subject,
                message: message,
            });

            console.log("Document written with ID: ", docRef.id);
            Swal.fire({
                position: 'center',
                    icon: 'success',
                    title: 'Your message is received!. We will get back to you soon.',
                    showConfirmButton: false,
                    timer: 5000
            });
            // alert("Thank you for contacting us! We will get back to you soon.");
        } catch (error) {
            console.error("Please try again ", error);
            alert(error.message);
        }

        // Reset form fields
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
    };
    

    return (
        <div className="form-container">
            <h1>Hi! We would love to hear from you</h1>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    placeholder="Subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                />

                <textarea
                    placeholder="Message"
                    rows="4"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                ></textarea>

                <button>Send Message</button>
            </form>
        </div>
    );
}

export default ContactForm;

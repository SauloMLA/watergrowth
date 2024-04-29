import React, { useState } from 'react';
import Navbar from '../components/nav';
import Footer from '../components/Footer';

function Contact() {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        country: 'mexico', // Valor predeterminado para el país
        subject: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Verifica si todos los campos están llenos
        if (formData.firstname.trim() === '' || formData.lastname.trim() === '' || formData.subject.trim() === '') {
            alert('Por favor llena los campos'); // Muestra un mensaje de alerta al usuario
            return; // Detiene el envío del formulario
        }
        
        // Envía el formulario por correo electrónico
        const mailtoLink = `mailto:watergrowthsolutions@gmail.com?subject=${formData.subject}&body=First Name: ${formData.firstname}%0A
        Last Name: ${formData.lastname}%0A
        Country: ${formData.country}%0A
        Subject: ${formData.subject}`;
        window.location.href = mailtoLink;
    };

    return (
        <div className='principal'>
            <Navbar wU="contact" />

            <section class="iniciobien-contact">
                <div class="conttent-fir-contact">
                    <h2><span>Contact</span></h2>
                </div>


            </section>
            <section>

                <div class="container" style={{ marginTop: "-100px" }}>
                    <form onSubmit={handleSubmit}>

                        <label for="fname">First Name</label>
                        <input type="text" id="fname" name="firstname" placeholder="Fulanito" value={formData.firstname} onChange={handleChange} />

                        <label for="lname">Last Name</label>
                        <input type="text" id="lname" name="lastname" placeholder="De Tal" value={formData.lastname} onChange={handleChange} />

                        <label for="country">Country</label>
                        <select id="country" name="country" value={formData.country} onChange={handleChange}>
                            <option value="mexico">Mexico</option>
                            <option value="Germany">Germany</option>
                            <option value="brazil">Brazil</option>
                            <option value="canada">Canada</option>
                            <option value="unitedstates">United States</option>
                            <option value="unitedkingdom">United Kingdom</option>
                        </select>

                        <label for="subject">Subject</label>
                        <textarea id="subject" name="subject" placeholder="I want an amazing vertical orchard " style={{ height: "200px" }} value={formData.subject} onChange={handleChange}></textarea>

                        <input type="submit" value="Submit" />

                    </form>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default Contact;

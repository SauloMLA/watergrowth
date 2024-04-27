import React from 'react';
import Header from '../components/header';
import Navbar from '../components/nav';
import AboutUs from '../components/AboutUs';
import Footer from '../components/Footer';

function Contact() {
    return (
        <div className='principal'>
        <Navbar wU="contact"/>

        <section class="iniciobien-contact"> 
            <div class="conttent-fir-contact">
              <h2><span>Contact</span></h2>
            </div>
           

          </section>
        <section>

            <div class="container" style={{marginTop: "-100px"}}>
                <form action='mailto:watergrowthsolutions@gmail.com' method='post'>
        
                    <label for="fname">First Name</label>
                    <input type="text" id="fname" name="firstname" placeholder="Fulanito"/>
        
                    <label for="lname">Last Name</label>
                    <input type="text" id="lname" name="lastname" placeholder="De Tal"/>
        
                    <label for="country">Country</label>
                    <select id="country" name="country">
                        <option value="mexico">Mexico</option>
                        <option value="Germany">Germany</option>
                        <option value="brazil">Brazil</option>
                        <option value="canada">Canada</option>
                        <option value="unitedstates">United States</option>
                        <option value="unitedkingdom">United Kingdom</option>
                    </select>
        
                    <label for="subject">Subject</label>
                    <textarea id="subject" name="subject" placeholder="I want an amazing vertical orchard " style={{height: "200px"}}></textarea>
        
                    <input type="submit" value="Submit"/>
        
                </form>
            </div>
        </section>
        
        <Footer/>
        </div>
  );
}

export default Contact;

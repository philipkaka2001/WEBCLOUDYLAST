import React from 'react';
import './style.css'
import Navbar from '../Navbar';
import Footer from '../Footer';
 
function Contact(){
  return (
   <>
    <Navbar/>
   <div className="contact-section">
    <div className="contact-info">
        <div><i class='fas fa-map-marker-alt'></i>Address, City, Country</div>
        <div><i class='fas fa-envelope'></i>contact@gmail.com</div>
        <div><i class='fas fa-phone'></i>+98 0254 554 223</div>
        <div><i class='fas fa-clock'></i>Mon - Fri 8:00 AM to 5:00 PM</div>

    </div>
    <div className='contact-form'>
        <h2>Contact Us</h2>
        <form className='contact' action='' method='post'>
            <input type="text" name='name' class='text-box' placeholder='Your Name' required/>
            <input type="email" name='email' class='text-box' placeholder='Your Email' required/>
            <textarea name='message' rows='5' placeholder='Your Message' required></textarea>
            <input type="submit" name='submit' class='send-btn' value="Send"/>

        </form>
    </div>
   </div>
    <Footer/>
   </>
  )
}

export default Contact
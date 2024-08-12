import React from 'react'
import '../styles/contact.css';
const Contact = () => {
    return (
        <div className='contactContainer'>
            <h1>Contact</h1>
            <form className="contactForm">
                <div className="fieldHolder">
                    <label htmlFor='name' hidden>Name</label>
                    <input type="text" name='name' placeholder='Enter your Name' required />

                </div>
                <div className="fieldHolder">
                    <label htmlFor='email' hidden>Email</label>
                    <input type="text" placeholder='Enter your Email' required />

                </div>
                <div className="fieldHolder">
                    <label htmlFor='message' hidden>Message</label>
                    <textarea placeholder='Message' required></textarea>
                </div>
                <input type="submit" value="Send" className='submitButton' />
            </form>
        </div>
    )
}

export default Contact;
import React from 'react';
import './Contact.css';
import img from './user2.png';

function Contact() {
    return (
        <div className="landing-page">
            <div className="container">
            <nav className="navbar">
                <div className="logo">BookTrains</div>
                <div className="navbar-links">
                    <a href="/home" className="navbar-link">Home</a>
                    <a href="/about-us" className="navbar-link">About Us</a>
                    <a href="/contact" className="navbar-link">Contact</a>
                    <a href="/notifications" className="navbar-link">Notification</a>
                    <a href='/search-trains' className='navbar-link'>
                        <img src={img} alt="User Icon" className="navbar-img" />
                    </a>
                </div>
            </nav>
                <div className="form-container">
                    <div className="form">
                        <p className="form-heading">Get a quote</p>
                        <p className="form-subheading">We will get back to you in 24 hours</p>
                        <div className="form-fields">
                            <input className="input" name="FirstName" placeholder="First Name" />
                            <input className="input" name="LastName" placeholder="Last Name" />
                            <input className="input email" name="Email" placeholder="Email" />
                            <input className="input" name="PhoneNumber" placeholder="Phone Number" />
                            <textarea className="textarea" placeholder="Type message here"></textarea>
                        </div>
                        <button className="submit-btn">Get quote</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;

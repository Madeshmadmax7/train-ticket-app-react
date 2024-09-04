import React from 'react';
import './SearchTrains.css';
import img from './user2.png';

function ProfilePage() {
    return (
        <div className="profile-page-container">
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
            <div className="profile-container">
                <div className="profile-card">
                    <div className="text-center">
                        <img src={img} width="100" className="rounded-circle" alt="Profile" />
                    </div>
                    <div className="text-center mt-3">
                        <h5 className="mt-2 mb-0">Madesh</h5>
                    </div>
                <div className="recent-trips">
                    <h3>Recent Trips</h3>
                    <ul>
                        Chennai to Coimbatore<br></br>
                        Coimbatore to Tirupur
                    </ul>
                </div>
                <div className="no-updates">
                    <p>No updates see you soon.</p>
                </div>
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;

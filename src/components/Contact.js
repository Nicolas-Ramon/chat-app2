import React from 'react';
import './Contact.css';

function Contact () {
    return (
        <div className = 'Contact'>
            <div>
                <img className = 'avatar' src="https://randomuser.me/api/portraits/men/89.jpg" alt="logo"></img>
            </div>
            <div>
                <p className = 'name'>Alexander George</p>
                <div className = 'status'>
                    <p className = 'status-online'></p>
                    <h4 className = 'status-text'>online</h4>
                </div>
            </div>
        </div>
    );
}

export default Contact;
import React from 'react';
import './Contact.css';

const Contact = () => {
    const name = 'Alexander George'
    const image = 'https://randomuser.me/api/portraits/men/89.jpg'
    const isOnline = true
    const stat = isOnline ? 'status-online' : 'status-offline';


    return (
        <div className = 'Contact'>
            <img className = 'avatar' src={image} alt="logo"></img>
            <div>
                <h4 className = 'name'>{name}</h4>
                <div className = 'status'>
                    <div className ={stat} />
                    <p className = 'status-text'>{isOnline ? "Online" : "Offline"}</p>
                </div>
            </div>
        </div>
    );
}

export default Contact;
import React from 'react';
import './Contact.css';
import PropTypes from 'prop-types';

const Contact = (props) => {

     return (
        <div className = 'Contact'>
            <img className = 'avatar' src={props.avatar} alt="{props.name}"></img>
            <div>
                <h4 className = 'name'>{props.name}</h4>
                <div className = 'status'>
                    <div className ={props.online ? 'status-online' : 'status-offline'} />
                    <p className = 'status-text'>{props.online ? "Online" : "Offline"}</p>
                </div>
            </div>
        </div>
    );
}


Contact.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    online: PropTypes.bool.isRequired,
  };

export default Contact;
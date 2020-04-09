import React from 'react';
import './Contact.css';
import PropTypes from 'prop-types';

// Version avec juste le clic sur l'indicateur qui fonctionne

// class Contact extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             online : props.online
//         }
//     }
//     render() {
//         return (
//             <div className = 'Contact'>
//                 <img className = 'avatar' src={this.props.avatar} alt="{this.props.name}"></img>
//                 <div>
//                     <h4 className = 'name'>{this.props.name}</h4>
//                     <div className = 'status'>
//                         <div className ={this.state.online ? 'status-online' : 'status-offline'} onClick={event =>  {
//                             let newTest = !this.state.online;
//                             this.setState ({online : newTest})
//                         }} />
//                         <p className = 'status-text'>{this.state.online ? "Online" : "Offline"}</p>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

// Version avec le clic sur la div entière

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            online : props.online
        }
    }
    render() {
        return (
            <div className = 'Contact'>
                <img className = 'avatar' src={this.props.avatar} alt="{this.props.name}"></img>
                <div>
                    <h4 className = 'name'>{this.props.name}</h4>
                    <div className = 'status' onClick={event =>  {
                        let newTest = !this.state.online;
                        this.setState ({online : newTest})
                        }}>
                        <div className ={this.state.online ? 'status-online' : 'status-offline'} />
                        <p className = 'status-text'>{this.state.online ? "Online" : "Offline"}</p>
                    </div>
                </div>
            </div>
        );
    }
}


Contact.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    online: PropTypes.bool.isRequired,
  };

export default Contact;



// const Contact = (props) => {

//      return (
//         <div className = 'Contact'>
//             <img className = 'avatar' src={props.avatar} alt="{props.name}"></img>
//             <div>
//                 <h4 className = 'name'>{props.name}</h4>
//                 <div className = 'status'>
//                     <div className ={props.online ? 'status-online' : 'status-offline'} />
//                     <p className = 'status-text'>{props.online ? "Online" : "Offline"}</p>
//                 </div>
//             </div>
//         </div>
//     );
// }
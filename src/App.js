import React from 'react';
import Contact from './components/Contact';
import users from './components/users';


function App() {

  const allContact = users.map(contact => (
    <Contact 
      name={contact.name}
      avatar={contact.avatar}
      online={contact.online} />
    
  ));

  return (
    <div className="App">    
      {allContact}
    </div>
  );
}

export default App;



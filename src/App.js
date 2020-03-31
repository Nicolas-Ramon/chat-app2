import React from 'react';
import Contact from './components/Contact';


function App() {
  return (
    
    <div className="App">
      <Contact 
        name = 'Alexander George'
        avatar = 'https://randomuser.me/api/portraits/men/89.jpg'
        online />

      <Contact 
        name = 'Beverley Mckinney'
        avatar = 'https://randomuser.me/api/portraits/women/65.jpg'
        online = {false} />

      <Contact 
        name = 'Jackson Spencer'
        avatar = 'https://randomuser.me/api/portraits/men/88.jpg'
        online /> 

    </div>
  );
}

export default App;



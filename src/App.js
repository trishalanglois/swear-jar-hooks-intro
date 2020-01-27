import React, { useState } from 'react';
import './App.css';
import Form from './Form';
import JarContainer from './JarContainer';


function App() {
  const [users, addUser] = useState([]);
  return (
    <main className="App">
      <h1 className="title">Swear Jar 💸</h1>
      < Form 
        users={users}
        addUser={addUser}
      />
      < JarContainer 
        users={users}
      />
    </main>
  );
}

export default App;

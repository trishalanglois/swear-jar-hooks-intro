import React, { useState } from 'react';
import './Form.css'


const Form = ({ users, addUser }) => {
  const [user, setUserName] = useState('');

  const submitNewUser = (event) => {
    event.preventDefault();
    addUser(prevUsers => [...prevUsers, user])
  }

  return (
    <div className="form">
      <h2 className="name-label">Name</h2>
      <input className="name-input" value={user} name='user' onChange={event => setUserName(event.target.value)}></input>
      <button className="form-button" onClick={event => submitNewUser(event)}>Create Swear Jar</button>
    </div>
  )
}

export default Form;
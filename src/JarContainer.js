import React from 'react';
import SwearJarCard from './SwearJarCard';


const JarContainer = ({ users }) => {
  const renderedUsers = users.map(user => {
    return <SwearJarCard
      key={Date.now()}
      name={ user }
    />
  })

  return (
    <main className='jars-container'>
      {renderedUsers}
    </main>
  )
}

export default JarContainer;
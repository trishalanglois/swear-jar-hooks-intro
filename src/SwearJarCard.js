import React, { useState } from 'react';
import './SwearJarCard.css';

const SwearJarCard = ({ name }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1)
  }

  return (
    <article className="swear-jar-card">
      <h3 className="card-name">{name}</h3>
      <h1 className="count">{count}</h1>
      <button className="card-button" onClick={increment}>Add 💵</button>
    </article>
  )
}

export default SwearJarCard;
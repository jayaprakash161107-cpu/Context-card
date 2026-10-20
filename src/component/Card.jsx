import React from 'react'
import { Button } from './Button'

export const Card = ({ name, email, button }) => {
  return (
    <div className='card-container'>
      <div className='card'>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
      <div className='btn'>
        <Button name={button} />
      </div>
    </div>
  )
}

export default Card

import React from 'react'
import home from '../assets/home.png'
function Jumptron() {
  return (
    <div className='jumptron'>
        <div id='welcome-image'>
            <img src={home} alt='home-books'/>
        </div>
        <div id='welcome-text'>
        <h1>What Book are you looking for?</h1>
        <p>Not sure What to read next ? Explore Our catalog for public domain Books with our editors</p>
        <button id='Explore'>Explore Now</button>
        </div>
        
      </div>
  )
}

export default Jumptron

import React from 'react'
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <div id='footer'>
    <div id='grid'>
    <div className="logo"><p>Cartoonoroma</p></div>
    <ul id='footerList'>
      <Link to='/' className='Home'>Home</Link>
      <li>About Us</li>
      <li>Contact</li>
    </ul>
    </div>
    </div>
  )
}

export default Footer;

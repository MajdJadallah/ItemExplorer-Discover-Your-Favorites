import React from 'react'
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <div id='footer'>
    <div id='grid'>
    <div className="logo"><span id='c'>CART</span><span id='log'>oon-roma</span>
            </div>
    <ul id='footerList'>
      <Link to='/' className='home'>Home</Link>
      <li>About Us</li>
      <li>Contact</li>
    </ul>
    </div>
    </div>
  )
}

export default Footer;

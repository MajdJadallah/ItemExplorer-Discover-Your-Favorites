import React from 'react'
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <div id='footer'>
    <div id='grid'>
    <div className="logo"><span id='c'>C</span><span id='a'>A</span><span id='r'>R</span><span id='t'>t</span>
            <span id='o'>o</span><span id='oo'>o</span><span id='n'>n</span><span id='ooo'>o</span>
            <span id='rr'>r</span><span id='aa'>a</span><span id='m'>m</span><span id='aaa'>a</span>
            </div>
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

import React from 'react'
import{Link} from 'react-router-dom'
function Header() {
  return (
    <div id='header'>
      <>
        <Link to='/' id="nav">
            <li className="logo"><span id='c'>C</span><span id='a'>A</span><span id='r'>R</span><span id='t'>t</span>
            <span id='o'>o</span><span id='oo'>o</span><span id='n'>n</span><span id='ooo'>o</span>
            <span id='rr'>r</span><span id='aa'>a</span><span id='m'>m</span><span id='aaa'>a</span>
            </li>
            <li >
                <ul id='nav-list'>
                    <Link to='/' className='home'>Home</Link>
                    <li>About us</li>
                    <li>Contact us</li>
                </ul>
            </li>
        </Link>
      </>
      
    </div>
    
  )
}

export default Header














// import React from 'react'

// function Header() {
//   return (
//     <>
// <div id="nav">
// <p id='logo'>
// <span id='c'>C</span>
// <span id='a'>A</span>
// <span id='r'>R</span>
// <span id='t'>T</span>
// <span id='o'>O</span>
// <span id='oo'>O</span>
// <span id='n'>N</span>
// <span id='ooo'>O</span>
// <span id='rr'>R</span>
// <span id='aa'>A</span>
// <span id='m'>M</span>
// <span id='aaa'>A</span>
//     </p>
// <div className="logo"><p>Cartoonoroma</p></div>
//   <input type='text' id='search' onChange={searchName} />
//   <ul>
//     <li>Home</li>
//     <li>About Us</li>
//     <li>Contact</li>
//   </ul>
//   <img src={Profile} alt="profile" id='profile' />
//       </div>
//     </>
//   )
// }

// export default Header

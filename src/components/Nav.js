import React from 'react'
import '../index.css'
function Nav() {
  return (
    <>
    <nav class="navbar navbar-expand-lg d-flex" id='nav'>
  <div class="container-fluid" id='nav-list'>
    <a class="navbar-brand" href="/" id='logo'><span>B</span>ook-area</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse items" id="navbarNav">
      <ul class="navbar-nav" id='pages'>
        <li class="nav-item">
          <a class="nav-link active item" aria-current="page" href="/" id='home' >Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link item" href="/">Shop</a>
        </li>
        <li class="nav-item">
          <a class="nav-link item" href="/">E-Books</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Nav

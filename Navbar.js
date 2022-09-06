/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import logo1 from "../logo1.jpg";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <a className="navbar-brand" href="#"><img className="logo" src={logo1} alt="logo"></img></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home(Intro) <span className="sr-only"></span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Project</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Blogs</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Feedback Form</a>
      </li>
      
      
      
    </ul>
    
  </div>
</nav>

  )
}

export default Navbar

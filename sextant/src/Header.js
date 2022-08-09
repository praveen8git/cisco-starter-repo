import './Header.css';
import React from 'react'

function Header() {
  return (
    <nav className="navbar shadow sticky-top bg-dark bg-gradient py-5 ">
      <div className="container-fluid">
        <a className="navbar-brand m-auto text-white" href="/"><span className="display-6">Sextant</span></a>
      </div>
    </nav>
  )
}

export default Header
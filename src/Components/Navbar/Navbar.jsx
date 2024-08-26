import React from 'react'
import { Link } from 'react-router-dom'
import '../Navbar/Navbar.css';

export default function Navbar() {
  return (
    <div>
          <header class="header" data-header>
            <div class="container">

              <a href="#">
                <img 
                    className="logo" 
                    src="https://lh3.googleusercontent.com/pw/ABLVV86UxWoFD-4VGWy80dpJupXcFh0rpdi1Xv0UipM2YXXJ67ggTrIMj5JRz1SUf5FJzoaEKAQRnr5of4gDB_Goa8iEC2mmCKlZQg-_6ZcApTBIJe2l6A=w2400?source=screenshot.guru" 
                    alt="logo-ZenithYuga" 
                    height="300" 
                    width="250" 
                />
                </a>


              <nav class="navbar" data-navbar>

                <div class="wrapper">
                  <a href="#" class="logo">ZenithYuga</a>

                  <button class="nav-close-btn" aria-label="close menu" data-nav-toggler>
                    <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
                  </button>
                </div>

                <ul className="navbar-list">
                  <li className="navbar-item">
                    <Link to="/" className="navbar-link" data-nav-link>Home</Link>
                  </li>

                  <li className="navbar-item">
                    <Link to="/service" className="navbar-link" data-nav-link>Services</Link>
                  </li>

                  <li className="navbar-item">
                    <Link to="/feature" className="navbar-link" data-nav-link>Features</Link>
                  </li>

                  <li className="navbar-item">
                    <Link to="/project" className="navbar-link" data-nav-link>Project</Link>
                  </li>

                  <li className="navbar-item">
                    <Link to="/contact" className="navbar-link" data-nav-link>Contact</Link>
                  </li>

                  <li className="navbar-item">
                    <Link to="/team" className="navbar-link" data-nav-link>Team</Link>
                  </li>
                </ul>

              </nav>

              <button class="nav-open-btn" aria-label="open menu" data-nav-toggler>
                <ion-icon name="menu-outline" aria-hidden="true"></ion-icon>
              </button>

              <a href="https://wa.me/+917730073926?text=Let's%20Talk%20👋" target="_blank" class="btn btn-primary has-before has-after">Let’s Talk 👋</a>


              <div class="overlay" data-nav-toggler data-overlay></div>

            </div>
      </header>
    </div>
  )
}

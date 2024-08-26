import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Navbar/Navbar.css'; // Make sure your CSS file path is correct

export default function Navbar() {
  // State to manage the visibility of the navbar
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  // Function to toggle the navbar
  const handleToggleNavbar = () => {
    setIsNavbarOpen(prev => !prev);
  };

  // Close the navbar when clicking outside of it or on a link
  const closeNavbar = () => {
    setIsNavbarOpen(false);
  };

  // Ensure navbar closes when screen is resized above 992px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) {
        setIsNavbarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className={`header ${isNavbarOpen ? 'active' : ''}`} data-header>
      <div className="container">
        <Link to="/" className="logo">ZenithYuga</Link>

        <nav className={`navbar ${isNavbarOpen ? 'active' : ''}`} data-navbar>
          <div className="wrapper">
            <Link to="/" className="logo">ZenithYuga</Link>
            <button
              className="nav-close-btn"
              aria-label="close menu"
              onClick={closeNavbar}
            >
              <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
            </button>
          </div>

          <ul className="navbar-list">
            <li className="navbar-item">
              <Link to="/" className="navbar-link" data-nav-link onClick={closeNavbar}>Home</Link>
            </li>
            <li className="navbar-item">
              <Link to="/service" className="navbar-link" data-nav-link onClick={closeNavbar}>Services</Link>
            </li>
            <li className="navbar-item">
              <Link to="/feature" className="navbar-link" data-nav-link onClick={closeNavbar}>Features</Link>
            </li>
            <li className="navbar-item">
              <Link to="/project" className="navbar-link" data-nav-link onClick={closeNavbar}>Project</Link>
            </li>
            <li className="navbar-item">
              <Link to="/contact" className="navbar-link" data-nav-link onClick={closeNavbar}>Contact</Link>
            </li>
            <li className="navbar-item">
              <Link to="/team" className="navbar-link" data-nav-link onClick={closeNavbar}>Team</Link>
            </li>
          </ul>
        </nav>

        <button
          className="nav-open-btn"
          aria-label="open menu"
          onClick={handleToggleNavbar}
        >
          &#9776;
        </button>

        <a 
          href="https://wa.me/+917730073926?text=Let's%20Talk%20👋"
          target="_blank"
          className="btn btn-primary has-before has-after"
          rel="noopener noreferrer"
        >
          Let’s Talk 👋
        </a>

        {isNavbarOpen && (
          <div className="overlay active" onClick={closeNavbar}></div>
        )}
      </div>
    </header>
  );
}

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import '../Home/Home.css'; // Import your CSS

// Import Font Awesome components and icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Home() {
  return (
    <div>
      <main>
        <article>

          {/* 
            - #HERO
          */}

          <section className="section hero" id="home" aria-label="hero">
            <div className="container">

              <div className="hero-content">

                <h1 className="h1 hero-title">
                  Building Apps,<span className="has-before">Websites</span>, Branding and Learning made Easy
                </h1>

                <p className="hero-text">
                  At ZenithYuga, we redefine success through expert design, development, learning, branding, and marketing. Experience accessibility like never before, where achieving your goals is made uniquely easy.
                </p>

                <div className="wrapper">
                  <Link to="/feature" className="btn btn-primary has-before has-after">How We Work</Link>
                </div>

                <ul className="social-list">
                  <li>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/profile.php?id=61554996852014&mibextid=ZbWKwL" className="social-link" style={{ "--color": "hsl(241, 77%, 63%)" }}>
                      <FontAwesomeIcon icon={faFacebookF} /> {/* Facebook Font Awesome Icon */}
                      <span className="span">Facebook</span>
                    </a>
                  </li>

                  <li>
                    <a target="_blank" rel="noopener noreferrer" href="https://youtube.com/@ZENITHYUGA?si=efcP15tUmAR2txrj" className="social-link" style={{ "--color": "hsl(0, 100%, 50%)" }}>
                      <FontAwesomeIcon icon={faYoutube} /> {/* YouTube Font Awesome Icon */}
                      <span className="span">YouTube</span>
                    </a>
                  </li>

                  <li>
                    <a target="_blank" rel="noopener noreferrer" href="https://x.com/ZenithYuga?t=aVoPJpDDvqHpqwbyJQThwg&s=09" className="social-link" style={{ "--color": "hsl(203, 89%, 53%)" }}>
                      <FontAwesomeIcon icon={faTwitter} /> {/* Twitter Font Awesome Icon */}
                      <span className="span">Twitter</span>
                    </a>
                  </li>
                </ul>

              </div>

              <figure className="hero-banner">
                <img src="https://lh3.googleusercontent.com/pw/ABLVV85Bq3T7RI36J-pe36otmxIIaDaXh-VJ2omftrpg5Wbro9D3B6fljBUsqyU03fREI6mfr29aoNy_yK0_lHbmopmSnF8yRyT1f0riz6H7x7ZhoSzd1g=w2400?source=screenshot.guru" 
                     width="794" 
                     height="637" 
                     alt="hero banner" 
                     className="w-100" />
              </figure>

            </div>
          </section>
        </article>
      </main>
    </div>
  );
}

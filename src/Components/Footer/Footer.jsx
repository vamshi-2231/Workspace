import React from 'react';
import '../Footer/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top section">
          <div className="footer-brand">
            <p className="footer-list-title">About ZenithYuga</p>
            <p className="footer-text">
              Inspire to believe and propel your business and education towards a better trajectory.
            </p>
            <ul className="social-list">
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://youtube.com/@ZENITHYUGA?si=efcP15tUmAR2txrj"
                  className="social-link"
                >
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://x.com/ZenithYuga?t=aVoPJpDDvqHpqwbyJQThwg&s=09"
                  className="social-link"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/profile.php?id=61554996852014&mibextid=ZbWKwL"
                  className="social-link"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </li>
            </ul>
          </div>

          <ul className="footer-list">
            <li>
              <p className="footer-list-title">To Connect</p>
            </li>
            <li>
              <a href="#contact" className="footer-link">Contact us</a>
            </li>
            <li>
              <a href="#feature" className="footer-link">How it Works</a>
            </li>
            <li>
              <a href="#service" className="footer-link">Services</a>
            </li>
          </ul>

          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Our details</p>
            </li>
            <li>
              <a href="#href" className="footer-link">Phone Number</a>
            </li>
            <li>
              <a
                href="https://wa.me/+917730073926?text=Let's%20Talk%20👋"
                className="footer-link"
              >
                7730073926
              </a>
            </li>
            <li>
              <a href="#href" className="footer-link">Mail ID</a>
            </li>
            <li>
              <a href="mailto:zenithyugatech@gmail.com" className="footer-link">
                zenithyugatech@gmail.com
              </a>
            </li>
          </ul>

          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Instagram post</p>
            </li>
            <li>
              <ul className="insta-post">
                <li>
                  <div className="insta-card">
                    <figure className="post-banner">
                      <img
                        src="https://lh3.googleusercontent.com/pw/ABLVV86VygtnwQpDm78XNJpIVA4N1DTrHU0MUrEfOieMuQEtO79X4pyidkTRkquK3RBXNNwZ4YAusxiRtpgFnOLgJ1ReT8-m5pcYiIp3HmF0CbRYur2RhA=w2400?source=screenshot.guru"
                        width="77"
                        height="63"
                        loading="lazy"
                        alt="instagram post"
                        className="img-cover"
                      />
                    </figure>
                    <a
                      target="_blank"
                      href="https://www.instagram.com/zenith_yuga?igsh=NjE4c3ExZmx6bHky"
                      className="card-content"
                      rel="noopener noreferrer"
                    >
                      <ion-icon name="logo-instagram" aria-hidden="true"></ion-icon>
                    </a>
                  </div>
                </li>
                {/* Repeat similar blocks for other Instagram posts */}
                <li>
                  <div className="insta-card">
                    <figure className="post-banner">
                      <img
                        src="https://lh3.googleusercontent.com/pw/ABLVV85R1QXoU3fiocHVF0v_lWQ4oEQQOyK2L0UoazaUvEtcx_FckcltWir47TEm5G4LsJR3aeBcuB4o61LuGPicznywFuE6WTR2WjZJCDbAAa5nvQ2Zcw=w2400?source=screenshot.guru"
                        width="77"
                        height="63"
                        loading="lazy"
                        alt="instagram post"
                        className="img-cover"
                      />
                    </figure>
                    <a
                      target="_blank"
                      href="https://www.instagram.com/zenithyuga?igsh=MWFkZGo2NzIzNXdpMg=="
                      className="card-content"
                      rel="noopener noreferrer"
                    >
                      <ion-icon name="logo-instagram" aria-hidden="true"></ion-icon>
                    </a>
                  </div>
                </li>
                {/* Add more insta-card blocks as needed */}
              </ul>
            </li>
          </ul>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            &copy; 2024. All Rights Reserved by ZenithYuga
          </p>
          <ul className="footer-bottom-list">
            <li>
              <a href="#href" className="footer-bottom-link">Terms and conditions</a>
            </li>
            <li>
              <a href="#href" className="footer-bottom-link">Privacy policy</a>
            </li>
          </ul>
        </div>

        <a
          href="#top"
          className="back-top-btn has-after active"
          aria-label="back to top"
          data-back-top-btn
        >
          <ion-icon name="arrow-up" aria-hidden="true"></ion-icon>
        </a>
      </div>
    </footer>
  );
}

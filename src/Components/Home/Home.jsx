import React from 'react'
import '../Home/Home.css'

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
                  <a href="#feature" className="btn btn-primary has-before has-after">How We Work</a>
                </div>

                <ul className="social-list">
                  <li>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/profile.php?id=61554996852014&mibextid=ZbWKwL"t className="social-link" style={{ "--color": "hsl(241, 77%, 63%)" }}>
                      <ion-icon name="logo-facebook"></ion-icon>
                      <span className="span">Facebook</span>
                    </a>
                  </li>

                  <li>
                    <a target="_blank" rel="noopener noreferrer" href="https://youtube.com/@ZENITHYUGA?si=efcP15tUmAR2txrj" className="social-link" style={{ "--color": "hsl(0, 100%, 50%)" }}>
                      <ion-icon name="logo-youtube"></ion-icon>
                      <span className="span">Youtube</span>
                    </a>
                  </li>

                  <li>
                    <a target="_blank" rel="noopener noreferrer" href="https://x.com/ZenithYuga?t=aVoPJpDDvqHpqwbyJQThwg&s=09" className="social-link" style={{ "--color": "hsl(203, 89%, 53%)" }}>
                      <ion-icon name="logo-twitter"></ion-icon>
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

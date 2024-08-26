import React from 'react';
import { Link } from 'react-router-dom'
import '../Contact/Contact.css';
export default function Contact() {
  return (
    <div>
      {/* 
        - #NEWSLETTER
      */}

      <section 
        className="section newsletter has-bg-image" 
        aria-label="newsletter"
        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/pw/ABLVV87YUufdC0t9rdsCMW6auYGUxjTMEbmpQ4AlSMC1j4moO4-1OzQizTUhFGOf_UEhI0ws8RMRfhY95dbYjqBi_Se2HEU-qidJoLVkAKuMGwMkI557iQ=w2400?source=screenshot.guru')" }} 
        id="contact"
      >
        <div className="container">
          <figure className="newsletter-banner">
            <img 
              src="https://lh3.googleusercontent.com/pw/ABLVV84tij8AEutgkxu8p0lhvI-gBxddqgvTQMvL0ncKmlusppObNsaqNncN7HuTo-6JyRu8QQLqByK83Q5DRqmRF8C7nRdn-JWkKVOw_uBOw7Pg86yvhQ=w2400?source=screenshot.guru" 
              width="355" 
              height="356" 
              loading="lazy"
              alt="newsletter banner" 
              className="w-100"
            />
          </figure>

          <div className="newsletter-content" id="">
            <p className="section-subtitle has-before">To ConTact Us</p>
            <h2 className="h2 section-title">And Make your Business and Education More Comfortable With Us</h2>

            <form 
              action="mailto:zenithyugatech@gmail.com" 
              method="post" 
              encType="text/plain" 
              className="newsletter-form"
            >
              <input 
                type="email" 
                name="email_address" 
                placeholder="Enter your mail" 
                required 
                className="email-field" 
              />
              <button 
                type="submit" 
                className="btn btn-secondary has-before has-after"
              >
                <span className="span">Connect with us</span>
                <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

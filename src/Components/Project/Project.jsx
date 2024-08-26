import React from 'react';
import '../Project/Project.css'

export default function Project() {
  return (
    <div>      
      {/* 
        - #PROJECT
      */}

      <section className="section project" id="project" aria-label="project">
        <div className="container">

          <p className="section-subtitle has-before text-center">Our Most Popular Services</p>

          <h2 className="h2 section-title text-center">
            ZenithYuga Famous <span className="has-before">Services</span>
          </h2>

          {/* 
          <ul className="filter-list">
            <li>
              <button className="filter-btn active" data-filter-btn>Website</button>
            </li>
            <li>
              <button className="filter-btn" data-filter-btn>Landing Page</button>
            </li>
            <li>
              <button className="filter-btn" data-filter-btn>iOS App</button>
            </li>
            <li>
              <button className="filter-btn" data-filter-btn>Landing Page</button>
            </li>
            <li>
              <button className="filter-btn" data-filter-btn>Branding Design</button>
            </li>
          </ul> 
          */}

          <ul className="grid-list">

            <li>
              <div className="project-card">
                <figure className="card-banner img-holder" style={{ "--width": 416, "--height": 429 }}>
                  <img 
                    src="https://lh3.googleusercontent.com/pw/ABLVV87KKVaHrj9A8AKlajAnmabHPesvwlHEsuner3DGzsx8EpQNV8cxYN9hQsIIWz6-Xg39IaJUwEWqwrs1PgPD4bGUWrznMvD7gLYSgX5RBU9i705JhA=w2400?source=screenshot.guru" 
                    width="416" 
                    height="429" 
                    loading="lazy" 
                    alt="Book art design"
                    className="img-cover" 
                  />
                </figure>

                <div className="card-content">
                  <h3 className="h3">
                    <a  href="#href" className="card-title">Web and App UI/UX Designing</a>
                  </h3>
                  <a  href="#href" className="card-tag">Designing</a>
                </div>
              </div>
            </li>

            <li>
              <div className="project-card">
                <figure className="card-banner img-holder" style={{ "--width": 416, "--height": 429 }}>
                  <img 
                    src="https://lh3.googleusercontent.com/pw/ABLVV86z9hQx53Po9UhTVu1p0dKwAi5-LQzLb8aEdw7lXqHNnmQjU3BZQkbbKXK91thi2RkeSHP5-HoGlPRmAflPOTpdDC9yPDwzqJ0ZL0SzHjBq7yUaiQ=w2400?source=screenshot.guru" 
                    width="416" 
                    height="429" 
                    loading="lazy" 
                    alt="Graphic Design"
                    className="img-cover" 
                  />
                </figure>

                <div className="card-content">
                  <h3 className="h3">
                    <a  href="#href" className="card-title">Mobile App Development</a>
                  </h3>
                  <a  href="#href" className="card-tag">Development</a>
                </div>
              </div>
            </li>

            <li>
              <div className="project-card">
                <figure className="card-banner img-holder" style={{ "--width": 550, "--height": 565 }}>
                  <img 
                    src="https://lh3.googleusercontent.com/pw/ABLVV85i11shdEuuOH-5Eyhye2bT3in8xbGhFxc2E_YQ4aHjlKZ7mlzND1lBE76H-EHhlGrV5u4_w_ujmAzAvOtSKoSbUN6S4LMfEkwhp0hti4cAzNedvQ=w2400?source=screenshot.guru" 
                    width="416" 
                    height="429" 
                    loading="lazy" 
                    alt="3d Digital Art"
                    className="img-cover" 
                  />
                </figure>

                <div className="card-content">
                  <h3 className="h3">
                    <a  href="#href" className="card-title">Hackathons and Webinars</a>
                  </h3>
                  <a  href="#href" className="card-tag">Education</a>
                </div>
              </div>
            </li>

            <li>
              <div className="project-card">
                <figure className="card-banner img-holder" style={{ "--width": 416, "--height": 429 }}>
                  <img 
                    src="https://lh3.googleusercontent.com/pw/ABLVV84q08syImZshB7cLqHD_yJA5mxxks5DpFdVyK8l9Hq8VT_DA6g-eDYLsUuZwaWapuH323TV0bYMwfUg9htgyGfMPPXwnz3RGrCNw06oYtWrjPUKxQ=w2400?source=screenshot.guru" 
                    width="416" 
                    height="429" 
                    loading="lazy" 
                    alt="Web Design"
                    className="img-cover"
                  />
                </figure>

                <div className="card-content">
                  <h3 className="h3">
                    <a  href="#href" className="card-title">Web Development</a>
                  </h3>
                  <a  href="#href" className="card-tag">Development</a>
                </div>
              </div>
            </li>

            <li>
              <div className="project-card">
                <figure className="card-banner img-holder" style={{ "--width": 416, "--height": 429 }}>
                  <img 
                    src="https://lh3.googleusercontent.com/pw/ABLVV86yKRMKLPriR1xPceMsjN8hbInDzboF3x_-lG4OlRj-LBdXvG4LbUW8qE3pGqFbTCYYFPKvCEXnco5PQztXedcRjOTNnu3BilKpgC7My16S_3sPPA=w2400?source=screenshot.guru" 
                    width="416" 
                    height="429" 
                    loading="lazy" 
                    alt="Mobile App Design" 
                    className="img-cover" 
                  />
                </figure>

                <div className="card-content">
                  <h3 className="h3">
                    <a  href="#href" className="card-title">Social Media Handling</a>
                  </h3>
                  <a  href="#href" className="card-tag">Marketing</a>
                </div>
              </div>
            </li>

          </ul>

        </div>
      </section>
    </div>
  );
}

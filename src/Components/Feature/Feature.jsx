import React from 'react'
import '../Feature/Feature.css'

export default function Feature() {
  return (
    <div>
              {/* <!-- 
        - #FEATURE
      --> */}

      <section class="section feature" id="feature" aria-label="feature">
        <div class="container">

          <figure class="feature-banner">
            <img src="https://lh3.googleusercontent.com/pw/ABLVV87pMAUevVSWyBx-KuggYT5ssu0t0EqdCp51N4jFhsIAnzdCTf4JGrFqrta_C8YnYbTK-oqWfgHxXP9DevVBOe6WGQKGC0egiNAuoaWqYpA8_eZUbg=w2400?source=screenshot.guru" width="582" height="585" loading="lazy" alt="feature banner"
              class="w-100"></img>
          </figure>

          <div class="feature-content">

            <p class="section-subtitle has-before">Why Choose us</p>

            <h2 class="h2 section-title">

              "Exceptional Expertise and Commitment: <span class="has-before">Choosing Us for Unparalleled
                Solutions"</span>
            </h2>

            <ul class="feature-list">

              <li>
                <div class="feature-card">

                <div className="card-icon" style={{ "--color": "174, 77%, 50%" }}>
                <ion-icon name="rocket-sharp" aria-hidden="true"></ion-icon>
                </div>


                  <div>
                    <h3 class="h3 card-title">Fast working process</h3>

                    <p class="card-text">
                      At ZenithYuga, we operate with unwavering dedication, executing tasks efficiently through well-structured action plans.
                    </p>
                  </div>

                </div>
              </li>

              <li>
                <div class="feature-card">

                <div className="card-icon" style={{ "--color": "241, 77%, 63%" }}>
                    <ion-icon name="people-sharp" aria-hidden="true"></ion-icon>
                    </div>


                  <div>
                    <h3 class="h3 card-title">Dedicated team</h3>

                    <p class="card-text">
                      Our highly dedicated and enthusiastic team consistently exemplifies a strong work ethic, fostering a culture of commitment and excellence.
                    </p>
                  </div>

                </div>
              </li>

              <li>
                <div class="feature-card">

                <div className="card-icon" style={{ "--color": "343, 98%, 60%" }}>
                    <ion-icon name="headset-sharp" aria-hidden="true"></ion-icon>
                    </div>

                  <div>
                    <h3 class="h3 card-title">24/7 support</h3>

                    <p class="card-text">
                      We are available irrespective of time the customer can contact any time.
                    </p>
                  </div>

                </div>
              </li>

            </ul>

          </div>

        </div>
      </section>
    </div>
  )
}

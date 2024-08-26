import React from 'react'

export default function top_up_button() {
  return (
    <div>
        <a
          href="#top"
          className="back-top-btn has-after active"
          aria-label="back to top"
          data-back-top-btn
        >
          <ion-icon name="arrow-up" aria-hidden="true"></ion-icon>
        </a>
    </div>
  )
}

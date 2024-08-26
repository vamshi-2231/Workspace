import React, { useEffect } from 'react';
// import './App.css'; // Ensure your styles are imported

function Loadscript() {
  useEffect(() => {
    // Load Ionicons
    const loadIonicons = () => {
      const ioniconsModule = document.createElement('script');
      ioniconsModule.type = 'module';
      ioniconsModule.src = 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js';
      document.body.appendChild(ioniconsModule);

      const ioniconsLegacy = document.createElement('script');
      ioniconsLegacy.nomodule = true;
      ioniconsLegacy.src = 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js';
      document.body.appendChild(ioniconsLegacy);
    };

    // Load Firebase
    import('../Scripts/Firebase').then(() => {
      console.log('Firebase initialized');
    });

    // Load other scripts
    const scripts = [
      { src: 'resources/jquery-3.5.1.js', defer: true },
      { src: 'resources/Magnific-Popup-master/dist/jquery.magnific-popup.js', defer: true },
      { src: 'resources/OwlCarousel2-2.3.4/dist/owl.carousel.js', defer: true },
      { src: 'resources/WOW-master/dist/wow.js', defer: true },
      { src: './Script.js', defer: true }
    ];

    scripts.forEach(({ src, defer }) => {
      const script = document.createElement('script');
      script.src = src;
      script.defer = defer;
      document.body.appendChild(script);
    });

    loadIonicons();

    return () => {
      // Cleanup scripts if needed
      document.querySelectorAll('script[src]').forEach(script => document.body.removeChild(script));
    };
  }, []);

  return (
    <div className="App">
      {/* Your component content */}
    </div>
  );
}

export default Loadscript;

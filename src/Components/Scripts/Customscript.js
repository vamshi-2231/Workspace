// src/components/Scripts/CustomScript.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../Navbar/Navbar.css'; // Importing the CSS file

function CustomScript() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to the top when pathname changes
    window.scrollTo(0, 0);

    // Define the function to add event listeners
    const addEventOnElem = (elems, type, callback) => {
      if (!elems) return; // Exit if elems is null or undefined

      if (NodeList.prototype.isPrototypeOf(elems)) {
        elems.forEach(elem => {
          if (elem instanceof HTMLElement) {
            elem.addEventListener(type, callback);
          }
        });
      } else if (elems instanceof HTMLElement) {
        elems.addEventListener(type, callback);
      }
    };

    const headerActive = () => {
      const header = document.querySelector("[data-header]");
      const backTopBtn = document.querySelector("[data-back-top-btn]");

      if (header && backTopBtn) {
        if (window.scrollY > 80) {
          header.classList.add("active");
          backTopBtn.classList.add("active");
        } else {
          header.classList.remove("active");
          backTopBtn.classList.remove("active");
        }
      }
    };

    addEventOnElem(window, "scroll", headerActive);

    // Clean up event listeners on component unmount
    return () => {
      if (window) {
        window.removeEventListener("scroll", headerActive);
      }
    };
  }, [pathname]);

  return null;
}

export default CustomScript;

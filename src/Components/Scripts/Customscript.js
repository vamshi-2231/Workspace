// src/components/Scripts/CustomScript.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../Navbar/Navbar.css'; // Importing the CSS file

function CustomScript() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to the top when pathname changes
    window.scrollTo(0, 0);

    /**
     * Add Event on elements
     */
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

    /**
     * Navbar toggle
     */
    const navbar = document.querySelector("[data-navbar]");
    const navTogglers = document.querySelectorAll("[data-nav-toggler]");
    const navbarLinks = document.querySelectorAll("[data-nav-link]");
    const overlay = document.querySelector("[data-overlay]");

    const toggleNavbar = () => {
      if (navbar && overlay) {
        navbar.classList.toggle("active");
        overlay.classList.toggle("active");
      }
    };

    const closeNavbar = () => {
      if (navbar && overlay) {
        navbar.classList.remove("active");
        overlay.classList.remove("active");
      }
    };

    addEventOnElem(navTogglers, "click", toggleNavbar);
    addEventOnElem(navbarLinks, "click", closeNavbar);

    /**
     * Header & Back to Top Button visibility on scroll
     */
    const header = document.querySelector("[data-header]");
    const backTopBtn = document.querySelector("[data-back-top-btn]");

    const headerActive = () => {
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
      if (NodeList.prototype.isPrototypeOf(navTogglers)) {
        navTogglers.forEach(elem => {
          if (elem instanceof HTMLElement) {
            elem.removeEventListener("click", toggleNavbar);
          }
        });
      }
      if (NodeList.prototype.isPrototypeOf(navbarLinks)) {
        navbarLinks.forEach(elem => {
          if (elem instanceof HTMLElement) {
            elem.removeEventListener("click", closeNavbar);
          }
        });
      }
      if (window) {
        window.removeEventListener("scroll", headerActive);
      }
    };
  }, [pathname]);

  return null;
}

export default CustomScript;

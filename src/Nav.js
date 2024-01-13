import React from "react";
import "./Nav.css";
import { useState, useEffect } from "react";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Provide both the event type and event handler function for removal
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="nav">
      <img
        className="nav__logo"
        src="https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-png-large.png"
        alt="Netflix-logo"
      />

      <img
        className="nav__avatar"
        src="https://loodibee.com/wp-content/uploads/Netflix-avatar-1-300x300.png"
        alt="Netflix-avatar"
      />
    </div>
  );
}

export default Nav;

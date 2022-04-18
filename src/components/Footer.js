import React from "react";

function Footer() {
  return (
    <div className="footer">
      <ul className="footer-item">
        <a
          href="https://stevenei.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa fa-book fa-2x"></i>
        </a>
        <a
          href="https://github.com/StevenEi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa fa-github fa-2x"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/steven-eiselt-524561164/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa fa-linkedin fa-2x"></i>
        </a>
        <a href="mailto:seiselts@gmail.com?&Subject=%20I%20Saw%20Your%20Portfolio!">
          <i class="fa fa-envelope fa-2x"></i>
        </a>
      </ul>
    </div>
  );
}

export default Footer;

import React from "react";
import "./Footer.css";

export default () => {
  return (
    <footer className="footer bg-dark text-white mt-5 p-4 text-center ">
      Made with <i className="fas fa-heart" /> and <i className="fas fa-code" />{" "}
      by{" "}
      <a
        href="https://www.koushith.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Koushith_Amin
      </a>
    </footer>
  );
};

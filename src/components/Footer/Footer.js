import React from "react";
import "./Footer.scss";
import { AiOutlineGithub } from "react-icons/ai";
const Footer = () => {
  return (
    <footer className="footer">
      <a href="https://github.com/dacitto">
        Made with love by <b>Daci Salah Eddine</b>{" "}
        <AiOutlineGithub className="icon" />
      </a>
    </footer>
  );
};

export default Footer;

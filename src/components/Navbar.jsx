"use client";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex flex-col sm:flex-row items-center justify-center sm:justify-between py-2 px-3">
      {/* Logo */}
      <div className="flex items-center justify-center">
        <img
          src="/logo.png"
          alt="logo"
          width="150"
          height="200"
          className="z-10 mx-2"
        />
      </div>

      {/* Social Icons */}
      <div className="flex items-center justify-center text-2xl gap-4 mt-4 sm:mt-0">
        <a
          href="https://www.linkedin.com/in/daniel-sunday-65899023a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={30} color="white" />
        </a>
        <a
          href="https://github.com/DNero5"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={30} color="white" />
        </a>
        <a
          href="https://www.twitter.com/DanielDnero999"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter size={30} color="white" />
        </a>
        <a
          href="https://www.instagram.com/dnero_999"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={30} color="white" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

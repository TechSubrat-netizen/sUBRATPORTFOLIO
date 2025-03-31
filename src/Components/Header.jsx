import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faTwitter, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import image from '../assets/myphoto.jpeg'

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-slate-800 text-white shadow-md fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-4 sm:px-6">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img
            src={image}
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
          <span className="text-lg sm:text-xl font-bold text-teal-400 whitespace-nowrap">
            Subrat Sahoo
          </span>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} size="lg" />
        </button>

        {/* Navigation Links */}
        <nav className={`
          ${isMobileMenuOpen ? 'block' : 'hidden'} 
          md:block absolute md:static top-full left-0 w-full md:w-auto 
          bg-slate-800 md:bg-transparent transition-all duration-300
        `}>
          <ul className="flex flex-col md:flex-row md:space-x-6 text-base md:text-lg p-4 md:p-0">
            <li className="py-2 md:py-0">
              <Link
                to="/"
                className="hover:text-teal-400 transition duration-300 block"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li className="py-2 md:py-0">
              <Link
                to="/about"
                className="hover:text-teal-400 transition duration-300 block"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li className="py-2 md:py-0">
              <Link
                to="/skill"
                className="hover:text-teal-400 transition duration-300 block"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Skills
              </Link>
            </li>
            <li className="py-2 md:py-0">
              <Link
                to="/project"
                className="hover:text-teal-400 transition duration-300 block"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Project
              </Link>
            </li>
            <li className="py-2 md:py-0">
              <Link
                to="/contact"
                className="hover:text-teal-400 transition duration-300 block"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
            <li className="py-2 md:py-0">
              <Link
                to="/codingProfile"
                className="hover:text-teal-400 transition duration-300 block"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                CodingProfile
              </Link>
            </li>
          </ul>
        </nav>

        {/* Social Media Links */}
        <div className="hidden lg:flex space-x-4">
          <a
            href="http://www.linkedin.com/in/subrat-sahoo-b72337261"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400 transition duration-300"
          >
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
          <a
            href="https://x.com/kh173952700?t=rbjzEGHsWmFlXnBQf59HwQ&s=08"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400 transition duration-300"
          >
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </a>
          <a
            href="https://github.com/TechSubrat-netizen"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400 transition duration-300"
          >
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
          <a
            href="https://www.instagram.com/subrat_akash?igsh=aTl0cXNnbjRwaDY1&utm_source=ig_contact_invite"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400 transition duration-300"
          >
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faTwitter, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";

function Header() {
  return (
    <header className="bg-slate-800 text-white shadow-md fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img
            src="https://media.licdn.com/dms/image/v2/D4D03AQFBo2iQuo9Heg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1675857686583?e=1742428800&v=beta&t=7hk96NKuFwEO2aJ1S7RvoEN3qaVtDaKioD_t5mm1p80"
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
          <span className="text-xl font-bold text-teal-400">Subrat Sahoo</span>
        </div>

        {/* Navigation Links */}
        <nav>
          <ul className="flex space-x-6 text-lg">
            <li>
              <Link
                to="/"
                className="hover:text-teal-400 transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-teal-400 transition duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/skill"
                className="hover:text-teal-400 transition duration-300"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="/project"
                className="hover:text-teal-400 transition duration-300"
              >
                Project
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-teal-400 transition duration-300"
              >
                Contact
              </Link>
             
            </li>
            <li>
            <Link to="/codingProfile"  className="hover:text-teal-400 transition duration-300">CodingProfile</Link>
            </li>
          </ul>
        </nav>

        {/* Social Media Links */}
        <div className="flex space-x-4">
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

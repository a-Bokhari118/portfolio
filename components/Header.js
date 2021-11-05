import Link from 'next/link';
import { FaGithub, FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaTwitch } from 'react-icons/fa';
const Header = () => {
  return (
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <div className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
        <Link href="/">
          <a>
            <img src="/BK.png" alt="BK" width="150px" height="100px" />
          </a>
        </Link>
      </div>
      <nav className="flex justify-between items-center h-20">
        <div>
          <ul className="flex justify-between items-center space-x-10 font-mainFont text-main-primary md:text-2xl flex-wrap">
            <li>About Me</li>
            <li>Projects</li>
            <li>Technologies</li>
          </ul>
        </div>
        <div>
          <ul className="flex justify-between items-center space-x-10 font-mainFont text-main-primary flex-wrap">
            <Link href="https://github.com/a-Bokhari118">
              <a
                target="_blank"
                rel="noreferrer"
                className="hover:scale-150 transform transition-all duration-200 text-xl md:text-2xl lg:text-3xl"
              >
                <li>
                  <FaGithub />
                </li>
              </a>
            </Link>
            <Link href="https://www.linkedin.com/in/abdullrhman-bokhari23/">
              <a
                target="_blank"
                rel="noreferrer"
                className="hover:scale-150 transform transition-all duration-200 text-xl md:text-2xl lg:text-3xl"
              >
                <li>
                  <FaLinkedin />
                </li>
              </a>
            </Link>
            <Link href="https://twitter.com/A_bokhari_">
              <a
                target="_blank"
                rel="noreferrer"
                className="hover:scale-150 transform transition-all duration-200 text-xl md:text-2xl lg:text-3xl"
              >
                <li>
                  <FaTwitter />
                </li>
              </a>
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;

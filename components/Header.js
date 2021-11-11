import Link from 'next/link';
import Image from 'next/image';
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaBars,
  FaTimes,
} from 'react-icons/fa';
import { useState } from 'react';

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            {/* <!-- logo --> */}
            <Link href="/">
              <div className="relative w-28 h-28 cursor-pointer">
                <Image src="/BK.svg" alt="The website logo" layout="fill" />
              </div>
            </Link>
            {/* <!-- primary nav --> */}
            <div className="hidden md:flex items-center space-x-1 text-white">
              <Link href="#about">
                <a className="py-5 px-3  cursor-pointer uppercase hover:text-[#2B83BA] transform hover:scale-110 transition-all duration-200 ">
                  About Me
                </a>
              </Link>
              <Link href="#tech">
                <a className="py-5 px-3  cursor-pointer uppercase hover:text-[#2B83BA] transform hover:scale-110 transition-all duration-200 ">
                  Technologies
                </a>
              </Link>
              <Link href="#projects">
                <a className="py-5 px-3  cursor-pointer uppercase hover:text-[#2B83BA] transform hover:scale-110 transition-all duration-200 ">
                  Projects
                </a>
              </Link>
              <Link href="#contact">
                <a className="py-5 px-3  cursor-pointer uppercase hover:text-[#2B83BA] transform hover:scale-110 transition-all duration-200 ">
                  Contact Me
                </a>
              </Link>
            </div>
          </div>

          {/* <!-- secondary nav --> */}
          <div className="hidden md:flex items-center space-x-1 text-white">
            <Link href="https://github.com/a-Bokhari118">
              <a
                className="px-3 py-5 cursor-pointer uppercase hover:text-[#2B83BA] hover:scale-125 transform transition-all duration-200"
                target="_blank"
                rel="noreferrer"
                aria-label="Gitub Account"
              >
                <FaGithub />
              </a>
            </Link>
            <Link href="https://twitter.com/A_bokhari_">
              <a
                className="px-3 py-5 cursor-pointer uppercase hover:text-[#2B83BA] hover:scale-125 transform transition-all duration-200"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter Account"
              >
                <FaTwitter />
              </a>
            </Link>
            <Link href="https://www.linkedin.com/in/abdullrhman-bokhari23/">
              <a
                className="px-3 py-5 cursor-pointer uppercase hover:text-[#2B83BA] hover:scale-125 transform transition-all duration-200"
                target="_blank"
                rel="noreferrer"
                aria-label="Linkedin Account"
              >
                <FaLinkedin />
              </a>
            </Link>
          </div>

          {/* <!-- mobile button goes here --> */}
          <div
            className="md:hidden flex items-center text-white cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <FaTimes className="w-6 h-6 mr-5" />
            ) : (
              <FaBars className="w-6 h-6 mr-5" />
            )}
          </div>
        </div>
      </div>

      {/* <!-- mobile menu --> */}
      <div
        className={`${
          open ? 'px-6 opacity-100' : 'hidden opacity-0'
        } md:hidden relative text-white transition duration-300`}
      >
        <Link href="#about">
          <a
            onClick={() => setOpen(false)}
            className="py-3 px-4 block cursor-pointer uppercase hover:text-[#2B83BA] transform hover:scale-110 transition-all duration-200 "
          >
            About Me
          </a>
        </Link>
        <Link href="#tech">
          <a
            onClick={() => setOpen(!open)}
            className="py-3 px-4 block cursor-pointer uppercase hover:text-[#2B83BA] transform hover:scale-110 transition-all duration-200 "
          >
            Technologies
          </a>
        </Link>
        <Link href="#projects">
          <a
            onClick={() => setOpen(!open)}
            className="py-3 px-4 block cursor-pointer uppercase hover:text-[#2B83BA] transform hover:scale-110 transition-all duration-200 "
          >
            Projects
          </a>
        </Link>
        <Link href="#contact">
          <a
            onClick={() => setOpen(!open)}
            className="py-3 px-4 block cursor-pointer uppercase hover:text-[#2B83BA] transform hover:scale-110 transition-all duration-200 "
          >
            Contact Me
          </a>
        </Link>

        <div className="flex justify-center items-center space-x-6 mb-2 md:mb-0 border-t mt-2 md:mt-0 md:border-none border-gray-400">
          <Link href="https://github.com/a-Bokhari118">
            <a
              className="px-3 py-5 cursor-pointer uppercase hover:text-[#2B83BA] hover:scale-125 transform transition-all duration-200"
              target="_blank"
              rel="noreferrer"
              aria-label="Gitub Account"
            >
              <FaGithub />
            </a>
          </Link>
          <Link href="https://twitter.com/A_bokhari_">
            <a
              className="px-3 py-5 cursor-pointer uppercase hover:text-[#2B83BA] hover:scale-125 transform transition-all duration-200"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter Account"
            >
              <FaTwitter />
            </a>
          </Link>
          <Link href="https://www.linkedin.com/in/abdullrhman-bokhari23/">
            <a
              className="px-3 py-5 cursor-pointer uppercase hover:text-[#2B83BA] hover:scale-125 transform transition-all duration-200"
              target="_blank"
              rel="noreferrer"
              aria-label="Linkedin Account"
            >
              <FaLinkedin />
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;

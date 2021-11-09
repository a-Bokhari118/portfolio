import Link from 'next/link';
import Image from 'next/image';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-gray-900 text-gray-100  w-full -mt-5">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center ">
        <Link href="/">
          <a className="flex md:w-1/5 title-font font-medium items-center md:justify-start mb-4 md:mb-0">
            <Image src="/BK.png" width={150} height={150} alt="logo" />
          </a>
        </Link>
        <nav className="flex flex-wrap md:w-4/5 items-center justify-center text-base md:ml-auto mx-auto">
          <div className="flex mt-[-20px] md:mt-0 flex-wrap justify-center">
            <Link href="#about">
              <a className="cursor-pointer uppercase hover:text-[#2B83BA]  hover:scale-105 transform transition-all duration-200  hover:mx-1">
                About Me
              </a>
            </Link>
            <Link href="#technology">
              <a className="pl-2 lg:pl-6 cursor-pointer uppercase hover:text-[#2B83BA] hover:scale-105 transform transition-all duration-200  hover:mx-1 ">
                Technologies
              </a>
            </Link>
            <Link href="#projects">
              <a className="pl-2 lg:pl-6 cursor-pointer uppercase hover:text-[#2B83BA] hover:scale-105 transform transition-all duration-200  hover:mx-1 ">
                Projects
              </a>
            </Link>
            <Link href="#contact">
              <a className="pl-2 lg:pl-6 cursor-pointer uppercase hover:text-[#2B83BA] hover:scale-105 transform transition-all duration-200  hover:mx-1">
                Contact Me
              </a>
            </Link>
          </div>
          <div className="md:ml-auto flex mt-5 mb-3 md:mb-0 md:mt-0">
            <Link href="https://github.com/a-Bokhari118">
              <a
                className="mx-5 cursor-pointer uppercase hover:text-[#2B83BA] hover:scale-125 transform transition-all duration-200"
                target="_blank"
                rel="noreferrer"
                aria-label="Gitub Account"
              >
                <FaGithub />
              </a>
            </Link>
            <Link href="https://twitter.com/A_bokhari_">
              <a
                className="mx-5 cursor-pointer uppercase hover:text-[#2B83BA] hover:scale-125 transform transition-all duration-200"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter Account"
              >
                <FaTwitter />
              </a>
            </Link>
            <Link href="https://www.linkedin.com/in/abdullrhman-bokhari23/">
              <a
                className="mx-5 cursor-pointer uppercase hover:text-[#2B83BA] hover:scale-125 transform transition-all duration-200"
                target="_blank"
                rel="noreferrer"
                aria-label="Linkedin Account"
              >
                <FaLinkedin />
              </a>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

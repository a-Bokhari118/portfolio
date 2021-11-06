import Link from 'next/link';
import { fade } from '../animations';
import { useScroll } from './useScroll';
import { motion } from 'framer-motion';

const Projects = () => {
  const [element, controls] = useScroll();
  const items = [
    {
      title: 'Creative Soultions',
      des: 'Landing page for a tech compnay',
      pic: '/s6.png',
      used: ['React', 'Framer Motion'],
      preview: 'https://creative-solution-bdc10.web.app/',
      source: 'https://github.com/a-Bokhari118/creative-solutions',
    },
    {
      title: 'Music Player',
      des: 'Music Player with Songs list',
      pic: '/s8.png',
      used: ['React'],
      preview: 'https://music-player-21d3e.web.app/',
      source: 'https://github.com/a-Bokhari118/music-player',
    },
    {
      title: 'E-commerce web app',
      des: 'ecommerce web app where Customers can buy products from anywhere',
      pic: '/s10.png',
      used: ['React', 'Redux', 'Nodejs', 'Expressjs', 'MongoDB'],
      preview: 'https://sladeshop.herokuapp.com/',
      source: 'https://github.com/a-Bokhari118/sladeshop',
    },
    {
      title: 'Static Blog App',
      des: 'Personal Blog App for a web developer who can post anything he wants',
      pic: '/s9.png',
      used: ['React', 'Nextjs', 'TailwindCSS'],
      preview: 'https://dev-blog-xi.vercel.app/',
      source: 'https://github.com/a-Bokhari118/dev-blog',
    },
  ];
  return (
    <motion.div
      variants={fade}
      animate={controls}
      initial="hidden"
      ref={element}
      className="container mx-auto px-5 py-10"
      id="projects"
    >
      <div className="w-24 h-1 rounded bg-[#2B83BA] mt-[-50px] mb-10"></div>
      <h1 className=" text-4xl md:text-6xl mb-20 font-mainFont  bg-gradient-to-tr from-[#2B83BA] to-green-100 text-transparent bg-clip-text">
        Projects
      </h1>

      {items?.map((item, index) => (
        <div
          key={index}
          className="flex flex-col lg:flex-row justify-between mt-16"
        >
          <div className="lg:w-[40%]">
            <img src={item.pic} className="w-full" />
          </div>
          <div className="flex flex-col mt-5 px-3 lg:mt-0 lg:px-0 items-start lg:w-[40%]">
            <h1 className="font-mainFont text-3xl md:text-4xl  bg-gradient-to-tr from-[#2B83BA] to-green-100 text-transparent bg-clip-text">
              {item.title}
            </h1>
            <p className="leading-relaxed text-xl md:text-2xl text-gray-200">
              {item.des}
            </p>
            <h1 className="text-base md:text-lg text-gray-400">
              Technologies Uesed
            </h1>
            <div className="flex flex-wrap mt-4 text-sm md:text-base">
              {item.used.map((tech, index) => (
                <p
                  key={index}
                  className="mr-2 bg-gradient-to-tr from-[#2B83BA] to-green-100 px-4 py-2 rounded shadow-md mt-2 "
                >
                  {tech}
                </p>
              ))}
            </div>

            <div className="flex mt-4 text-sm md:text-base">
              <Link href={item.source}>
                <a
                  className="mr-2 text-gray-300 px-4 py-2 rounded shadow-lg bg-gray-800 "
                  target="_blank"
                  rel="noreferrer"
                >
                  Sourse Code
                </a>
              </Link>
              <Link href={item.preview}>
                <a
                  className="mr-2 text-gray-300 px-4 py-2 rounded shadow-lg bg-gray-800 "
                  target="_blank"
                  rel="noreferrer"
                >
                  Preview
                </a>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default Projects;

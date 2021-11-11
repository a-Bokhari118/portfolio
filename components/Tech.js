import { fade } from '../animations';
import { useScroll } from './useScroll';
import { motion } from 'framer-motion';
import Image from 'next/image';
const Tech = () => {
  const [element, controls] = useScroll();

  const items = [
    { slug: '/images/css3.svg', alt: 'css3 logo' },
    { slug: '/images/html5.svg', alt: 'html5 logo' },
    { slug: '/images/bootstrap.svg', alt: 'bootstrap logo' },
    { slug: '/images/tailwind-css-icon.svg', alt: 'tailwincss logo' },
    { slug: '/images/sass.svg', alt: 'sass logo' },
    { slug: '/images/javascript.svg', alt: 'javascript logo' },
    { slug: '/images/python.svg', alt: 'python logo' },
    { slug: '/images/react.svg', alt: 'react logo' },
    { slug: '/images/next-js.svg', alt: 'next-js logo' },
    { slug: '/images/nodejs.svg', alt: 'nodejs logo' },
    { slug: '/images/expressjs.svg', alt: 'expressjs logo' },
    { slug: '/images/mongodb.svg', alt: 'mongodb logo' },
    { slug: '/images/redux.svg', alt: 'redux logo' },
    { slug: '/images/github.svg', alt: 'github logo' },
  ];
  return (
    <motion.section
      variants={fade}
      animate={controls}
      initial="hidden"
      ref={element}
      className="relative"
      id="tech"
    >
      <div className="container mx-auto px-5 relative">
        <div className="w-24 h-1 rounded bg-[#2B83BA]  mb-10"></div>
        <h1 className="text-4xl md:text-6xl font-mainFont  bg-gradient-to-tr from-[#2B83BA] to-green-100 text-transparent bg-clip-text">
          Technologies
        </h1>

        <div className="absolute right-[40px] lg:top-[400px] lg:right-[150px] md:top-[450px] md:right-[70px]  top-[360px] w-20 h-20 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full  bg-gradient-to-tr from-[#3e96ce] to-green-100 opacity-25 "></div>
        <div className="absolute right-[60px] lg:top-[300px] lg:right-[200px] md:top-[400px] md:right-[110px] top-[320px] w-20 h-20 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full  bg-gradient-to-tr from-[#176290] to-green-100 opacity-25 "></div>
        <div className="absolute right-[80px] lg:top-[400px] lg:right-[250px] md:top-[450px] md:right-[130px] top-[360px] w-20 h-20 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full  bg-gradient-to-tr from-[#255c7e] to-green-100 opacity-25 "></div>

        <div className="grid grid-cols-4 gap-6 py-16">
          {items?.map((item, index) => (
            <div
              key={index}
              className="flex justify-center md:justify-start items-center z-20 md:w-20 md:h-20 w-10 h-10 relative"
            >
              <Image src={item.slug} layout="fill" alt={item.alt} />
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Tech;

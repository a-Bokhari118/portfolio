import { motion } from 'framer-motion';
import BackgroundAnimation from './BackgroundAnimation';
import { fade, titleAnim } from '../animations';
import { useScroll } from './useScroll';
const Hero = () => {
  const [element, controls] = useScroll();
  return (
    <section className="body-font -mt-8">
      <div className="container mx-auto flex px-5 md:py-24 py-16 md:flex-row flex-col items-center relative">
        <motion.div
          variants={titleAnim}
          animate={controls}
          initial="hidden"
          ref={element}
          className="lg:flex-grow md:full lg:pr-24  flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-start  z-10"
        >
          <motion.div className=" mb-4 font-medium text-white space-y-5">
            <p className="font-sndFont opacity-25"> &#60; h1 &#62; </p>
            <h3 className="text-2xl pl-3 md:text-3xl">Hello 👋</h3>
            <h1 className="text-4xl md:text-5xl pl-3 ">
              I'm Abdulrhman Bokhari
            </h1>
            <h2 className="text-3xl pl-3 md:text-4xl text-[#3e96ce]">
              Front End Developer
            </h2>
            <p className="font-sndFont opacity-25">&#60; &#47; h1 &#62; </p>
          </motion.div>
          <motion.p className="mb-8 leading-relaxed text-gray-400 text-lg lg:w-[50%]">
            a web developer focused on building a great web experiences. Coding
            have been my passion since the days I started working with computers
          </motion.p>
          <motion.div className="flex justify-center">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-sm md:text-lg">
              <a href="mailto:abdulrhman.bokhari23@gmail.com">Hire Me 🔥</a>
            </button>
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-sm md:text-lg ml-3">
              <a href="/cv.pdf" target="_blank" rel="noreferre">
                My Resume 📁
              </a>
            </button>
          </motion.div>
        </motion.div>
        <motion.div
          variants={fade}
          animate={controls}
          initial="hidden"
          ref={element}
          className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 absolute right-5 top-24"
        >
          <BackgroundAnimation />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

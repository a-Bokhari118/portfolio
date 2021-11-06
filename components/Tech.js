import { fade, titleAnim } from '../animations';
import { useScroll } from './useScroll';
import { motion } from 'framer-motion';
const Tech = () => {
  const [element, controls] = useScroll();
  return (
    <motion.section
      variants={fade}
      animate={controls}
      initial="hidden"
      ref={element}
      className="relative"
      id="technology"
    >
      <div className="container mx-auto px-5 relative">
        <div className="w-24 h-1 rounded bg-[#2B83BA]  mb-10"></div>
        <h1 className="text-4xl md:text-6xl font-mainFont  bg-gradient-to-tr from-[#2B83BA] to-green-100 text-transparent bg-clip-text">
          Technologies
        </h1>

        <div className="absolute right-[40px] lg:top-[400px] lg:right-[150px] md:top-[450px] md:right-[70px]  top-[360px] w-20 h-20 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full  bg-gradient-to-tr from-[#3e96ce] to-green-100 opacity-25 "></div>
        <div className="absolute right-[60px] lg:top-[300px] lg:right-[200px] md:top-[400px] md:right-[110px] top-[320px] w-20 h-20 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full  bg-gradient-to-tr from-[#176290] to-green-100 opacity-25 "></div>
        <div className="absolute right-[80px] lg:top-[400px] lg:right-[250px] md:top-[450px] md:right-[130px] top-[360px] w-20 h-20 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full  bg-gradient-to-tr from-[#255c7e] to-green-100 opacity-25 "></div>

        {/* 
        <div className=" absolute right-[150px] top-[400px] w-36 h-36 rounded-full  bg-gradient-to-tr from-[#3e96ce] to-green-100 opacity-25 "></div>
        <div className="absolute right-[200px] top-[300px] w-36 h-36 rounded-full  bg-gradient-to-tr from-[#176290] to-green-100 opacity-25 "></div>
        <div className="absolute right-[250px] top-[400px] w-36 h-36 rounded-full  bg-gradient-to-tr from-[#255c7e] to-green-100 opacity-25 "></div> */}

        <div className="grid grid-cols-4 gap-6 py-16">
          <div className="flex justify-center md:justify-start items-center z-20">
            <img
              src="/images/css3.svg"
              className="md:w-20 md:h-20 w-10 h-10 "
            />
          </div>
          <div className="flex justify-center md:justify-start items-center z-20">
            <img
              src="/images/html5.svg"
              className="md:w-20 md:h-20 w-10 h-10 "
            />
          </div>
          <div className="flex justify-center md:justify-start items-center z-20">
            <img
              src="/images/bootstrap.svg"
              className="md:w-20 md:h-20 w-10 h-10 "
            />
          </div>
          <div className="flex justify-center md:justify-start items-center z-20">
            <img
              src="/images/tailwind-css-icon.svg"
              className="md:w-20 md:h-20 w-10 h-10 "
            />
          </div>
          <div className="flex justify-center md:justify-start items-center z-20">
            <img
              src="/images/sass.svg"
              className="md:w-20 md:h-20 w-10 h-10 "
            />
          </div>
          <div className="flex justify-center md:justify-start items-center z-20">
            <img
              src="/images/javascript.svg"
              className="md:w-20 md:h-20 w-10 h-10 "
            />
          </div>
          <div className="flex justify-center md:justify-start items-center z-20">
            <img
              src="/images/python.svg"
              className="md:w-20 md:h-20 w-10 h-10 "
            />
          </div>
          <div className="flex justify-center md:justify-start items-center z-20 ">
            <img
              src="/images/react.svg"
              className="md:w-20 md:h-20 w-10 h-10 "
            />
          </div>
          <div className="flex justify-center md:justify-start items-center z-20">
            <img
              src="/images/next-js.svg"
              className="md:w-20 md:h-20 w-10 h-10 "
            />
          </div>
          <div className="flex justify-center md:justify-start items-center z-20">
            <img
              src="/images/expressjs.svg"
              className="md:w-20 md:h-20 w-10 h-10 "
            />
          </div>
          <div className="flex justify-center md:justify-start items-center z-20">
            <img
              src="/images/nodejs.svg"
              className="md:w-20 md:h-20 w-10 h-10 "
            />
          </div>
          <div className="flex justify-center md:justify-start items-center z-20">
            <img
              src="/images/mongodb.svg"
              className="md:w-20 md:h-20 w-10 h-10 "
            />
          </div>
          <div className="flex justify-center md:justify-start items-center z-20">
            <img
              src="/images/redux.svg"
              className="md:w-20 md:h-20 w-10 h-10 "
            />
          </div>
          <div className="flex justify-center md:justify-start items-center z-20">
            <img
              src="/images/github.svg"
              className="md:w-20 md:h-20 w-10 h-10 "
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Tech;

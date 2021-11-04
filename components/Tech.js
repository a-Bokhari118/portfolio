import BackgroundAnimation from './BackgroundAnimation';

const Tech = () => {
  return (
    <section className="relative">
      <div className="container mx-auto px-5 relative">
        <div className="w-24 h-1 rounded bg-[#2B83BA]  mb-10"></div>
        <h1 className="text-4xl md:text-6xl font-mainFont  bg-gradient-to-tr from-[#2B83BA] to-green-100 text-transparent bg-clip-text">
          Technogogies
        </h1>

        <div className=" absolute right-[150px] top-[400px] w-36 h-36 rounded-full  bg-gradient-to-tr from-[#3e96ce] to-green-100 opacity-25 "></div>
        <div className="absolute right-[200px] top-[300px] w-36 h-36 rounded-full  bg-gradient-to-tr from-[#176290] to-green-100 opacity-25 "></div>
        <div className="absolute right-[250px] top-[400px] w-36 h-36 rounded-full  bg-gradient-to-tr from-[#255c7e] to-green-100 opacity-25 "></div>

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
    </section>
  );
};

export default Tech;

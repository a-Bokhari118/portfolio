import BackgroundAnimation from './BackgroundAnimation';

const Hero = () => {
  return (
    <section className="body-font ">
      <div className="container mx-auto flex px-5 py-16 md:flex-row flex-col items-center relative">
        <div className="lg:flex-grow md:full lg:pr-24  flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-start  z-10">
          <div className=" mb-4 font-medium text-white space-y-5">
            <p className="font-sndFont opacity-25"> &#60; h1 &#62; </p>
            <h3 className="text-2xl pl-3 md:text-3xl">Hello 👋</h3>
            <h1 className="text-4xl md:text-5xl pl-3 ">
              I'm Abdulrhman Bokhari
            </h1>
            <h2 className="text-3xl pl-3 md:text-4xl">Front End Developer</h2>
            <p className="font-sndFont opacity-25">&#60; &#47; h1 &#62; </p>
          </div>
          <p className="mb-8 leading-relaxed text-gray-400 text-lg lg:w-[50%]">
            a web developer focused on building a great web experiences. Coding
            have been my passion since the days I started working with computers
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Hire Me 🔥
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 absolute right-5 top-24">
          <BackgroundAnimation />
        </div>
      </div>
    </section>
  );
};

export default Hero;

import BackgroundAnimation from './BackgroundAnimation';

const Hero = () => {
  return (
    <section className="body-font ">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <div className=" mb-4 font-medium text-white space-y-5">
            <p className="font-sndFont opacity-25"> &#60; h1 &#62; </p>
            <h3 className="text-4xl pl-3">Hello 👋</h3>
            <h1 className="text-6xl pl-3">I'm Abdulrhman Bokhari</h1>
            <h2 className="text-5xl pl-3">Front End Developer</h2>
            <p className="font-sndFont opacity-25">&#60; &#47; h1 &#62; </p>
          </div>
          <p className="mb-8 leading-relaxed text-gray-400 text-xl">
            a web developer focused on building a great web experiences. Coding
            have been my passion since the days I started working with computers
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Hire Me 🔥
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <BackgroundAnimation />
        </div>
      </div>
    </section>
  );
};

export default Hero;

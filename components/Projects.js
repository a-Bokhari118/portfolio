const Projects = () => {
  return (
    <div className="container mx-auto px-5 py-10">
      <div className="w-24 h-1 rounded bg-[#2B83BA] mt-[-50px] mb-10"></div>
      <h1 className=" text-4xl md:text-6xl mb-20 font-mainFont  bg-gradient-to-tr from-[#2B83BA] to-green-100 text-transparent bg-clip-text">
        Projects
      </h1>
      <div className="flex justify-around mt-6">
        <div className="lg:max-w-lg">
          <img src="/s6.png" className="w-full" />
        </div>
        <div>
          <h1 className="font-mainFont text-4xl  bg-gradient-to-tr from-[#2B83BA] to-green-100 text-transparent bg-clip-text">
            Creative Soultions
          </h1>
          <p className="leading-relaxed text-3xl text-gray-200">
            Landing page for a tech compnay
          </p>
          <h1 className="text-xl text-gray-400">Technologies Uesed</h1>
          <p className="inline-block bg-gradient-to-tr from-[#2B83BA] to-green-100 px-4 py-2 rounded shadow-md mt-4">
            React
          </p>{' '}
          <p className="inline-block bg-gradient-to-tr from-[#2B83BA] to-green-100 px-4 py-2 rounded shadow-md">
            {' '}
            Framer Motion
          </p>
        </div>
      </div>

      <div className="flex justify-around mt-6">
        <div className="lg:max-w-lg hover: bg-blend-overlay">
          <img src="/s6.png" className="w-full" />
        </div>
        <div>
          <h1 className="font-mainFont text-4xl  bg-gradient-to-tr from-[#2B83BA] to-green-100 text-transparent bg-clip-text">
            Creative Soultions
          </h1>
          <p className="leading-relaxed text-3xl text-gray-200">
            Landing page for a tech compnay
          </p>
          <h1 className="text-xl text-gray-400">Technologies Uesed</h1>
          <p className="inline-block bg-gradient-to-tr from-[#2B83BA] to-green-100 px-4 py-2 rounded shadow-md mt-4">
            React
          </p>{' '}
          <p className="inline-block bg-gradient-to-tr from-[#2B83BA] to-green-100 px-4 py-2 rounded shadow-md">
            {' '}
            Framer Motion
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;

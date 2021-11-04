import Link from 'next/link';
const Projects = () => {
  return (
    <div className="container mx-auto px-5 py-10">
      <div className="w-24 h-1 rounded bg-[#2B83BA] mt-[-50px] mb-10"></div>
      <h1 className=" text-4xl md:text-6xl mb-20 font-mainFont  bg-gradient-to-tr from-[#2B83BA] to-green-100 text-transparent bg-clip-text">
        Projects
      </h1>

      <div className="flex justify-between mt-6">
        <div className="w-[40%]">
          <img src="/s6.png" className="w-full" />
        </div>
        <div className="flex flex-col items-start w-[40%]">
          <h1 className="font-mainFont text-4xl  bg-gradient-to-tr from-[#2B83BA] to-green-100 text-transparent bg-clip-text">
            Creative Soultions
          </h1>
          <p className="leading-relaxed text-3xl text-gray-200">
            Landing page for a tech compnay
          </p>
          <h1 className="text-xl text-gray-400">Technologies Uesed</h1>
          <div className="flex mt-4">
            <p className="mr-2 bg-gradient-to-tr from-[#2B83BA] to-green-100 px-4 py-2 rounded shadow-md ">
              React
            </p>
            <p className="bg-gradient-to-tr from-[#2B83BA] to-green-100 px-4 py-2 rounded shadow-md">
              Framer Motion
            </p>
          </div>

          <div className="flex mt-4">
            <Link href="https://github.com/a-Bokhari118/creative-solutions">
              <a
                className="mr-2 text-gray-300 px-4 py-2 rounded shadow-lg bg-gray-800 "
                target="_blank"
                rel="noreferrer"
              >
                Sourse Code
              </a>
            </Link>
            <Link href="https://creative-solution-bdc10.web.app/">
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

      <div className="flex justify-between mt-6">
        <div className="w-[40%]">
          <img src="/s8.png" className="w-full" />
        </div>
        <div className="flex flex-col items-start w-[40%]">
          <h1 className="font-mainFont text-4xl  bg-gradient-to-tr from-[#2B83BA] to-green-100 text-transparent bg-clip-text">
            Music Player
          </h1>
          <p className="leading-relaxed text-3xl text-gray-200">
            Music Player with Songs list
          </p>
          <h1 className="text-xl text-gray-400">Technologies Uesed</h1>
          <div className="flex mt-4">
            <p className="mr-2 bg-gradient-to-tr from-[#2B83BA] to-green-100 px-4 py-2 rounded shadow-md ">
              React
            </p>
          </div>

          <div className="flex mt-4">
            <Link href="https://github.com/a-Bokhari118/music-player">
              <a
                className="mr-2 text-gray-300 px-4 py-2 rounded shadow-lg bg-gray-800 "
                target="_blank"
                rel="noreferrer"
              >
                Sourse Code
              </a>
            </Link>
            <Link href="https://music-player-21d3e.web.app/">
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

      <div className="flex justify-between mt-6">
        <div className="w-[40%]">
          <img src="/s10.png" className="w-full" />
        </div>
        <div className="flex flex-col items-start w-[40%]">
          <h1 className="font-mainFont text-4xl  bg-gradient-to-tr from-[#2B83BA] to-green-100 text-transparent bg-clip-text">
            SladeShop
          </h1>
          <p className="leading-relaxed text-3xl text-gray-200">
            ecommerce web app where Customers can buy products from anywhere
          </p>
          <h1 className="text-xl text-gray-400">Technologies Uesed</h1>
          <div className="flex flex-wrap mt-4">
            <p className="mr-2 bg-gradient-to-tr from-[#2B83BA] to-green-100 px-4 py-2 rounded shadow-md ">
              React
            </p>
            <p className="mr-2 bg-gradient-to-tr from-[#2B83BA] to-green-100 px-4 py-2 rounded shadow-md ">
              Redux
            </p>
            <p className="mr-2 bg-gradient-to-tr from-[#2B83BA] to-green-100 px-4 py-2 rounded shadow-md ">
              Nodejs
            </p>
            <p className="mr-2 bg-gradient-to-tr from-[#2B83BA] to-green-100 px-4 py-2 rounded shadow-md ">
              Express
            </p>
            <p className="mr-2 bg-gradient-to-tr from-[#2B83BA] to-green-100 px-4 py-2 rounded shadow-md ">
              MongoDB
            </p>
          </div>

          <div className="flex mt-4">
            <Link href="https://github.com/a-Bokhari118/sladeshop">
              <a
                className="mr-2 text-gray-300 px-4 py-2 rounded shadow-lg bg-gray-800 "
                target="_blank"
                rel="noreferrer"
              >
                Sourse Code
              </a>
            </Link>
            <Link href="https://sladeshop.herokuapp.com/">
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

      <div className="flex justify-between mt-6">
        <div className="w-[40%]">
          <img src="/s9.png" className="w-full" />
        </div>
        <div className="flex flex-col items-start w-[40%]">
          <h1 className="font-mainFont text-4xl  bg-gradient-to-tr from-[#2B83BA] to-green-100 text-transparent bg-clip-text">
            Static Blog App
          </h1>
          <p className="leading-relaxed text-3xl text-gray-200">
            Personal Blog App for a web developer who can post anything he wants
          </p>
          <h1 className="text-xl text-gray-400">Technologies Uesed</h1>
          <div className="flex flex-wrap mt-4">
            <p className="mr-2 bg-gradient-to-tr from-[#2B83BA] to-green-100 px-4 py-2 rounded shadow-md ">
              React
            </p>
            <p className="mr-2 bg-gradient-to-tr from-[#2B83BA] to-green-100 px-4 py-2 rounded shadow-md ">
              Nextjs
            </p>
            <p className="mr-2 bg-gradient-to-tr from-[#2B83BA] to-green-100 px-4 py-2 rounded shadow-md ">
              TailwinCss
            </p>
          </div>

          <div className="flex mt-4">
            <Link href="https://github.com/a-Bokhari118/dev-blog">
              <a
                className="mr-2 text-gray-300 px-4 py-2 rounded shadow-lg bg-gray-800 "
                target="_blank"
                rel="noreferrer"
              >
                Sourse Code
              </a>
            </Link>
            <Link href="https://dev-blog-xi.vercel.app/">
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
    </div>
  );
};

export default Projects;

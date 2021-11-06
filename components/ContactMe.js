import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import { fade } from '../animations';
import { useScroll } from './useScroll';
import { motion } from 'framer-motion';

const ContactMe = () => {
  const [element, controls] = useScroll();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_fdcm4g1',
        'template_ng8lpll',
        e.target,
        'user_LnXV7RQfKm9oodmohLUGN'
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            icon: 'success',
            title: 'Message Sent Successfully',
          });
        },
        (error) => {
          console.log(error.text);
          Swal.fire({
            icon: 'error',
            title: 'Ooops, something went wrong',
            text: error.text,
          });
        }
      );
    e.target.reset();
  };
  return (
    <motion.section
      variants={fade}
      animate={controls}
      initial="hidden"
      ref={element}
      className="text-gray-600 body-font relative"
      id="contact"
    >
      <div className="container px-5 py-12 mx-auto ">
        <div className="flex flex-col text-center w-full mb-12 z-10">
          <h1 className=" text-4xl md:text-6xl mt-5 font-mainFont  bg-gradient-to-tr from-[#2B83BA] to-green-100 text-transparent bg-clip-text">
            Contact Me
          </h1>
        </div>
        <form onSubmit={sendEmail} style={{ zIndex: '10000' }}>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="name"
                    name="name"
                    className="leading-7 text-sm text-white"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    name="email"
                    className="leading-7 text-sm text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-white"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button
                  type="submit"
                  className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                >
                  Let&apos;s Be Best Friends 🤝
                </button>
              </div>
              <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                <a className="text-indigo-500 block mb-2">
                  abdulrhman.bokhari23@gmail.com
                </a>
                <a className="text-indigo-500">+966 565405917</a>
                <p className="leading-normal my-5">
                  Al-Fwakeh St.
                  <br />
                  Al-rabwah -makkah
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="hidden xl:block absolute right-[150px] top-[400px] w-44 h-44 rounded-full  bg-gradient-to-tr from-[#3e96ce] to-green-100 opacity-25  "></div>
      <div className="hidden xl:block absolute right-[200px] top-[300px] w-44 h-44 rounded-full  bg-gradient-to-tr from-[#176290] to-green-100 opacity-25  "></div>
      <div className="hidden xl:block absolute right-[250px] top-[400px] w-44 h-44 rounded-full  bg-gradient-to-tr from-[#255c7e] to-green-100 opacity-25  "></div>

      <div className=" hidden xl:block absolute left-[100px] top-[100px] w-60 h-60 rounded-full  bg-gradient-to-tr from-[#3e96ce] to-green-100 opacity-25  "></div>
      <div className="hidden xl:block absolute left-[40px] top-[200px] w-60 h-60 rounded-full  bg-gradient-to-tr from-[#176290] to-green-100 opacity-25  "></div>
      <div className="hidden xl:block absolute left-[150px] top-[200px] w-60 h-60 rounded-full  bg-gradient-to-tr from-[#255c7e] to-green-100 opacity-25  "></div>
    </motion.section>
  );
};

export default ContactMe;

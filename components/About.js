const About = () => {
  return (
    <section>
      <div className="container mx-auto px-5">
        <div className="w-24 h-1 rounded bg-[#2B83BA] mt-[-50px] mb-10"></div>
        <h1 className=" text-4xl md:text-6xl mb-5 font-mainFont  bg-gradient-to-tr from-[#2B83BA] to-green-100 text-transparent bg-clip-text">
          About Me
        </h1>

        <p className="mb-8 text-gray-400 w-full lg:w-[60%] text-xl md:text-2xl leading-relaxed">
          My name is Abdulrhman Bokhari and I am a <span> Web Developer </span>{' '}
          from Saudi Arabia{' '}
          <img src="/SA.png" className="w-5 h-3 inline-block" /> Makkah, who
          specializes in creating dynamic and beautiful web pages. I graduated
          in 2020 with a bachelor’s degree in <span>Computer Science</span> from
          Yanbu University College. I am a person who has high passion in coding
          and Gaming too 😀
        </p>
      </div>
    </section>
  );
};

export default About;

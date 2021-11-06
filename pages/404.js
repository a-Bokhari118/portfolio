const NotFound = () => {
  return (
    <div className="bg-gray-900 h-screen w-full  ">
      <div className="flex flex-col justify-center items-center container mx-auto p-20">
        <img src="/not.svg" alt="not found" className="w-full md:w-2/5 mb-5" />
        <h1 className=" text-4xl md:text-6xl mb-20 font-mainFont  bg-gradient-to-tr from-[#2B83BA] to-green-100 text-transparent bg-clip-text">
          Oh! This Page Does Not Exist
        </h1>
      </div>
    </div>
  );
};

export default NotFound;

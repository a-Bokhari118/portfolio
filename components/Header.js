import Link from 'next/link';

const Header = () => {
  return (
    <div className="container mx-auto py-5">
      <nav className="flex justify-between items-center h-20">
        <img src="/BK.png" alt="BK" width="150px" height="100px" />
        <div>
          <ul className="flex justify-between items-center space-x-10 font-mainFont text-main-primary md:text-2xl">
            <li>About Me</li>
            <li>Projects</li>
            <li>Technologies</li>
          </ul>
        </div>
        <div>
          <ul className="flex justify-between items-center space-x-10 font-mainFont text-main-primary">
            <li>github</li>
            <li>linkedin</li>
            <li>twitter</li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;

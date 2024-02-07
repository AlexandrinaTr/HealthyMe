import Logo from "./Logo";
function Navbar() {
  return (
    <div className="block sticky top-0 bg-white bg-opacity-85 hover:bg-opacity-100 z-50 transition-opacity">
      <nav className="flex flex-row justify-between p-1 text-xs sm:text-lg m-1 items-center md:my-3 md:mx-10 lg:mx-20 lg:my-10 lg:text-xl xl:mx-36 2xl:mx-48">
        <a className="w-20 sm:w-40 lg:w-60">
          <Logo />
        </a>
        <ul className="flex flex-row gap-3 sm:gap-10 lg:gap-20">
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#reviews">Reviews</a>
          </li>
          <li>
            <a>Contact us</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;

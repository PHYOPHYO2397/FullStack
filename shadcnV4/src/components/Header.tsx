import { useState } from "react";
import { Link, NavLink } from "react-router";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleFunction = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-sky-400 p-4 text-white">
      {/* container mx-auto ;width auto
      middle justify between ,  */}

      <nav className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-xl font-bold">
          Fashion Shop
        </Link>
        <button
          className="block text-xl text-white lg:hidden"
          onClick={toggleFunction}
        >
          &#8801;
        </button>
        {/*Nav for Desktop view  */}
        <ul className="hidden space-x-6 lg:flex">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-yellow-400" : "hover:text-gray-300"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/shop"
              className={({ isActive }) =>
                isActive ? "text-yellow-400" : "hover:text-gray-300"
              }
            >
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                isActive ? "text-yellow-400" : "hover:text-gray-300"
              }
            >
              Cart
            </NavLink>
          </li>
        </ul>
        {/*Mobile View Navigation*/}
        <div
          className={`fixed inset-0 z-50 transform ${isOpen ? "translate-x-0" : "translate-x-full"} bg-sky-400 opacity-90 transition-transform duration-300 ease-in-out lg:hidden`}
        >
          <div className="flex h-full flex-col items-center justify-center gap-8">
            <Link to="/" className="text-3xl" onClick={toggleFunction}>
              Home
            </Link>
            <Link to="/shop" className="text-3xl" onClick={toggleFunction}>
              Shop
            </Link>
            <Link to="/cart" className="text-3xl" onClick={toggleFunction}>
              Cart
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;

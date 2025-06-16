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
        <div className="">
          <div className="">
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/cart">Cart</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
